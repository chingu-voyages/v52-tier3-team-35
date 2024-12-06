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
import availableTimes from './times';
import { FormField, FormItem } from '@/components/ui/form';

export function TimeSelect() {
  return (
    <FormField
      name="bookingTime"
      render={({ field }) => (
        <FormItem>
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <div className="bg-white">
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Times</SelectLabel>
                  {availableTimes.map(({ time }) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </div>
          </Select>
        </FormItem>
      )}
    />
  );
}

export default TimeSelect;
