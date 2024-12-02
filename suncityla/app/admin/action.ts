import prisma from "@/prisma/prismaClient";

// Needed to prevent next.js from caching data
export const dynamic = "force-dynamic";

const getAdmins = async () => {
  return await prisma.admin.findMany();
};

const pendingBookings = async () => {
  return await prisma.booking.findMany({
    where: {
      status: "PENDING"
    }
  })
}

const cancelledBookings = async () => {
  return await prisma.booking.findMany({
    where: {
      status: "CANCELLED"
    }
  })
}
export { getAdmins, pendingBookings, cancelledBookings };
