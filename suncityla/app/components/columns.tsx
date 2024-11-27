"use client";

import { ColumnDef } from "@tanstack/react-table"
import { BookingStatus } from "@prisma/client";
import StatusDropdown from "./statusDropDown";

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
        accessorKey: "firstname",
        header: "First Name",
    },
    {
        accessorKey: "lastname",
        header: "Last Name",
    },
    {
        accessorKey: "bookingDate",
        header: "Booking Date",
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
