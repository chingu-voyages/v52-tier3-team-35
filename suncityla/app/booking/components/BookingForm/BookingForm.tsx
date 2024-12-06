'use client';

import { useActionState, useRef, startTransition, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import BookingFormField from './BookingFormField';
import { DateTimePickerForm } from '../TimeDatePicker/TimeDatePicker';
import LoadingModal from '@/components/modals/Loading';
import onSubmitAction from '@/app/booking/actions/onSubmitAction';
import { bookingFormSchema } from '../../schemas/newBookingForm';
import { Booking } from '@prisma/client';
import TimeSelect from '../TimeSelect/TimeSelect';
import createAvailableTimes from '../TimeSelect/times';

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm({ booking }: { booking?: Booking | null }) {
  const [state, formAction, isPending] = useActionState(onSubmitAction, {
    message: '',
    bookingRef: booking?.id ?? '',
  });

  const router = useRouter();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fname: booking?.firstname ?? '',
      lname: booking?.lastname ?? '',
      'street-address': booking?.streetAddress ?? '',
      'postal-code': booking?.postalCode ?? '',
      state: 'LA',
      bookingDate: booking?.bookingDate.toISOString() || '',
      ...(state.fields ?? {}),
    },
  });

  // Time Stamp
  const [time, setSelectedTime] = useState<number | undefined>(booking?.bookingDate.getTime());
  const watchDate = form.watch('bookingDate');
  const availableTimes = createAvailableTimes(new Date(watchDate));

  const formRef = useRef<HTMLFormElement>(null);

  const handleClearForm = () => {
    form.reset();
    setSelectedTime(undefined);
  };

  useEffect(() => {
    if (state.message === 'success' && !isPending) {
      router.push(`/booking/${state.bookingRef}`);
    }
  }, [state.bookingRef, isPending, router, state.message]);

  useEffect(() => {
    if (time) {
      const newDateWithTime = new Date(watchDate);
      const hours = new Date(time).getHours();
      newDateWithTime.setHours(hours);
      form.setValue('bookingDate', newDateWithTime.toISOString());
      return;
    }
  }, [watchDate, time, form]);

  return (
    <div className="w-96 border p-4 bg-slate-100 rounded-md">
      <LoadingModal show={isPending} />
      <Form {...form}>
        <form
          className="space-y-4"
          autoComplete="on"
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              startTransition(() => {
                if (!formRef.current) {
                  throw Error('Form element not found');
                }
                formAction(new FormData(formRef.current));
              });
            })(evt);
          }}
        >
          <BookingFormField placeholder="First name" name="fname" />
          <BookingFormField placeholder="Last name" name="lname" />
          <BookingFormField placeholder="Address" name="street-address" />
          <BookingFormField placeholder="Postcode" name="postal-code" />
          <BookingFormField placeholder="State" name="state" disabled />
          <DateTimePickerForm onChange={() => setSelectedTime(undefined)} />
          {watchDate && (
            <TimeSelect
              selectedTime={time}
              availableTimes={availableTimes}
              onTimeSelect={setSelectedTime}
            />
          )}
          <div className="flex gap-1 justify-end mt-4">
            {!booking?.id && (
              <Button onClick={handleClearForm} variant="outline">
                Clear
              </Button>
            )}
            <Button type="submit" disabled={form.formState.isSubmitting || !time}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
