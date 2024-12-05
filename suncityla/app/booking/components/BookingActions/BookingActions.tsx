import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { BookingStatus } from '@prisma/client';

const BookingActions = ({
  bookingId,
  bookingStatus,
}: {
  bookingId: string;
  bookingStatus: BookingStatus;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Manange booking</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {bookingStatus === 'PENDING' && (
          <Link href={`${bookingId}/amend`}>
            <DropdownMenuItem className="cursor-pointer">Amend</DropdownMenuItem>
          </Link>
        )}
        <Link href={`${bookingId}/cancel`}>
          <DropdownMenuItem className="text-destructive font-bold cursor-pointer hover:text-destructive">
            Cancel
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BookingActions;
