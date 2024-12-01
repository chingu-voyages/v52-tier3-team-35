import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";


 const updateBookingStatus = async (bookingId: string, newStatus: string) => {
  const validStatuses = ["PENDING", "CONFIRMED", "CANCELLED", "VISITED"];

  if (!validStatuses.includes(newStatus)) {
    throw new Error("Invalid status");
  }

  const updatedBooking = await prisma.booking.update({
    where: { id: bookingId },
    data: { status: newStatus as "PENDING" | "CONFIRMED" | "CANCELLED" | "VISITED" },
  });

  return updatedBooking;
};

export async function PUT(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const bookingId = pathname.split("/")[3];
  
  if (!bookingId) {
    return NextResponse.json({ message: "Booking id is required" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { status } = body;

    if (!status || typeof status !== "string") {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    const updatedBooking = await updateBookingStatus(bookingId, status);
    return NextResponse.json({
      message: "Booking status updated successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error updating booking status:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
