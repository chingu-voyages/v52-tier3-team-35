"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import updateBookingStatus from "../app/bookings/actions/updateBookingStatus";
import { BookingStatus } from "@prisma/client";

const StatusDropdown = ({
    id,
    currentStatus,
}: {
    id: string;
    currentStatus: BookingStatus;
}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition();

    const handleStatusChange = (newStatus: BookingStatus) => {
        startTransition(async () => {
            const result = await updateBookingStatus(id, newStatus);
            if (result instanceof Error)
            {
                console.error(result);
            }
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200">
                {currentStatus}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {Object.values(BookingStatus).map((status) => (
                    <DropdownMenuItem
                        key={status}
                        onClick={() => handleStatusChange(status)}
                        className={`cursor-pointer ${status === currentStatus ? "font-bold text-blue-500" : ""
                            }`}
                    >
                        {status}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default StatusDropdown;