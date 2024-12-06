'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

export function DateTimePickerForm({ onChange }: { onChange: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      name="bookingDate"
      render={({ field }) => (
        <FormItem>
          <Popover open={open}>
            <FormControl>
              <PopoverTrigger asChild>
                <Button
                  onClick={() => setOpen(true)}
                  variant="outline"
                  className={cn(
                    'w-full justify-start font-normal',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date?.toISOString());
                  setOpen(false);
                  onChange();
                }}
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" {...field} name={field.name} value={field.value} />
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
