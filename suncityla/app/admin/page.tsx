import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getBookings } from './action';
import { cancelledBookings, pendingBookings } from './action';
import { DataTable } from '@/components/data-table/data-table';
import { columns } from '@/components/data-table/columns';

export const dynamic = 'force-dynamic';

export default async function AdminsPage () {
  const bookings = await getBookings();
  const totalBookings = bookings.length;
  const pendingBooking = await pendingBookings();
  const cancelledBooking = await cancelledBookings();
  const session = await getServerSession(authOptions);
  if (!session || !session.user)
  {
    redirect('/admin/signin');
  }
  return (
    <div>
      <h1 className="text-center font-semibold text-xl">
        Welcome back <span className=" capitalize">{session.user.username}</span>
      </h1>
      <p>Number of Bookings: {totalBookings}</p>
      <p>Pending Bookings: {pendingBooking.length}</p>
      <p>Cancelled Bookings: {cancelledBooking.length}</p>
      <DataTable columns={columns} data={bookings} />
    </div>
  );
}
