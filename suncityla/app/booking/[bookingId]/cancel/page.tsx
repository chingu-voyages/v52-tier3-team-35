import prisma from '@/prisma/prismaClient';
import { BookingActionAlert } from '../../components/BookingActions/BookingActionAlert';
import BookingEntry from '../../components/BookingCard/BookingEntry';

export default async function CancelBooking({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}) {
  const { bookingId } = await params;
  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
    },
  });

  if (!booking) {
    return <div>No booking found</div>;
  }

  if (booking.status === 'CANCELLED') {
    return <div>Booking is cancelled</div>;
  }

  return (
    <div>
      <div>Cancel page</div>
      <BookingEntry booking={booking} />
      <BookingActionAlert
        header={'Cancel booking'}
        description={'Are you sure you want to cancel this booking?'}
        bookingId={bookingId}
      />
    </div>
  );
}
