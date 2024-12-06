'use server';

import prisma from '@/prisma/prismaClient';
import { bookingFormSchema } from '../schemas/newBookingForm';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  errors?: string[];
  bookingRef?: string;
};

const onSubmitAction = async (prvState: FormState, data: FormData): Promise<FormState> => {
  const formData = Object.fromEntries(data);
  const parsed = bookingFormSchema.safeParse(formData);
  let booking;
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: 'Invalid form data',
      fields,
      errors: parsed.error.issues.map((issue) => issue.message),
    };
  }

  if (prvState.bookingRef) {
    booking = await prisma.booking.update({
      where: {
        id: prvState.bookingRef,
      },
      data: {
        firstname: parsed.data.fname,
        lastname: parsed.data.lname,
        streetAddress: parsed.data['street-address'],
        state: parsed.data.state,
        postalCode: parsed.data['postal-code'],
        bookingDate: parsed.data.bookingDate,
      },
    });
  } else {
    booking = await prisma.booking.create({
      data: {
        firstname: parsed.data.fname,
        lastname: parsed.data.lname,
        streetAddress: parsed.data['street-address'],
        state: parsed.data.state,
        postalCode: parsed.data['postal-code'],
        bookingDate: parsed.data.bookingDate,
      },
    });
  }

  return {
    bookingRef: booking.id,
    message: 'success',
  };
};

export default onSubmitAction;
