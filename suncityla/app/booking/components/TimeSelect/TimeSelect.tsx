'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormField, FormItem } from '@/components/ui/form';
import { format } from 'date-fns';

export function TimeSelect({
  availableTimes,
  selectedTime,
  onTimeSelect,
}: {
  availableTimes: { from: number; to: number }[];
  selectedTime?: number;
  onTimeSelect: (time: number) => void;
}) {
  return (
    <FormField
      name=""
      render={() => {
        return (
          <FormItem>
            <Select
              onValueChange={(time) => onTimeSelect(Number(time))}
              value={selectedTime?.toString()}
            >
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <div className="bg-white">
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Times</SelectLabel>
                    {availableTimes.map(({ from, to }, i) => (
                      <SelectItem className="cursor-pointer" key={i} value={from.toString()}>
                        {format(from, 'h:mm a')} - {format(to, 'h:mm a')}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </div>
            </Select>
          </FormItem>
        );
      }}
    />
  );
}

export default TimeSelect;
