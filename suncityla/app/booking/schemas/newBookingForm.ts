import { z } from 'zod';

export const bookingFormSchema = z.object({
  fname: z.string().min(1, {
    message: 'First name is required.',
  }),
  lname: z.string().min(1, {
    message: 'Last name is required.',
  }),
  'street-address': z.string().min(1, {
    message: 'Street address is required.',
  }),
  'postal-code': z.string().min(5, {
    message: 'Postal code is required.',
  }),
  state: z
    .string()
    .min(2, {
      message: 'State is required',
    })
    .refine((val) => val === 'LA', {
      message: 'State must be LA.',
    }),
  bookingDate: z.string().refine(
    (val) => {
      const date = new Date(val);
      const now = new Date();
      return date > now;
    },
    {
      message: 'Booking date must be in the future.',
    },
  ),
  bookingId: z.string().optional(),
});
