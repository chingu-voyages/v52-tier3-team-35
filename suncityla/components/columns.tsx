"use client";

import { ColumnDef } from "@tanstack/react-table"
import { BookingStatus } from "@prisma/client";
import StatusDropdown from "./statusDropDown";
import { ArrowUpDown } from 'lucide-react';

export type BookingTableProps = {
    id: string;
    firstname: string;
    lastname: string;
    streetAddress: string;
    postalCode: string;
    state: string;
    bookingDate: Date;
    status: BookingStatus;
};

export const columns: ColumnDef<BookingTableProps>[] = [
    {
        id: "fullname",
        header: "Full Name",
        accessorFn: (row) => `${row.firstname} ${row.lastname}`, // Combine first and last name
        cell: ({ getValue }) => <span>{getValue() as string}</span>,
    },
    {
        accessorKey: "bookingDate",
        header: ({ column }) => {
            return (
                <button
                    className='inline-flex items-center'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <ArrowUpDown className="h-4 w-4" />
                    Booking Date & Time
                </button>
            )
        },
        cell: ({ getValue }) => <span>{new Date(getValue() as string).toDateString()}</span>,
    },
    {
        accessorKey: "streetAddress",
        header: "Street Address",
    },
    {
        accessorKey: "postalCode",
        header: "Postal Code",
    },
    {
        accessorKey: "state",
        header: "State",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (data) => <StatusDropdown id={data.row.original.id} currentStatus={data.row.original.status} />,
    },

];
