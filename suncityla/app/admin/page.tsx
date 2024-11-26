import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import getBookings from "../bookings/actions/getBookings";

export const dynamic = "force-dynamic";

export default async function AdminsPage ()
{
  const bookings = await getBookings();
  console.log(bookings)
  const session = await getServerSession(authOptions);
  if (!session || !session.user)
  {
    redirect("/admin/signin");
  }
  return (
    <div>
      <h1>Admins Dashboard</h1>
      <h2>Welcome back {session.user.username}</h2>
      <DataTable columns={columns} data={bookings} />
    </div>
  );
}
