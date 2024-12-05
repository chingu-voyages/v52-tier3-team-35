'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import onCancelBooking from '../../actions/onCancelBooking';
import { useState } from 'react';
import LoadingModal from '@/components/modals/Loading';

export function BookingActionAlert({
  header,
  description,
  bookingId,
}: {
  header: string;
  description: string;
  bookingId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onContinue = async () => {
    setIsLoading(true);
    await onCancelBooking(bookingId);
    router.push(`/booking/${bookingId}`);
  };

  if (isLoading) {
    return <LoadingModal show />;
  }

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link href={`/booking/${bookingId}`}>
            <AlertDialogCancel>No</AlertDialogCancel>
          </Link>
          <AlertDialogAction
            onClick={onContinue}
            className="bg-destructive text-white font-bold hover:bg-destructive"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
