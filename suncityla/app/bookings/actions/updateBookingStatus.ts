"use server";

import prisma from "@/prisma/prismaClient";
import * as z from "zod";
import {BookingStatus} from "@prisma/client";

//schema for validation
const updateStatusSchema = z.object({
  Bookingid: z.string().uuid("Invalid booking ID"),
  bookingStatus: z.nativeEnum(BookingStatus),
});

const updateBookingStatus = async (Bookingid: string, bookingStatus:BookingStatus)=>{
    const parsed = updateStatusSchema.safeParse({Bookingid, bookingStatus});
    if(!parsed.success){
        throw new Error(parsed.error.issues[0].message);
    }
    try{
        const booking = await prisma.booking.update({
            where: {
                id: Bookingid,
            },
            data: {
                status: bookingStatus,
            },
        });
        return booking;
    } catch(error){
        return error;
    }
}

export default updateBookingStatus;