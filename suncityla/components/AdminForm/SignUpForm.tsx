'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define validation schema with Zod
const AdminRegistrationSchema = z
  .object({
    username: z.string().min(1, 'Username is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

type AdminRegistrationFormData = z.infer<typeof AdminRegistrationSchema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminRegistrationFormData>({
    resolver: zodResolver(AdminRegistrationSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: AdminRegistrationFormData) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.push('/admin/signin');
    } else {
      alert('An error occurred while registering');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="regForm">
      <div>
        <label htmlFor="username">Username</label>
        <Input
          {...register('username')}
          id="username"
          placeholder="Enter your username"
          className="mt-1 bg-white"
        />
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Enter your password"
          className="mt-1 bg-white"
        />
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Input
          {...register('confirmPassword')}
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          className="mt-1 bg-white"
        />
        {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
      </div>
      <Button type="submit" variant="default">
        Register
      </Button>
      <div>
        <h2 className="text-center">
          Do you already have an account?{' '}
          <Link href="/admin/signin" className=" font-semibold text-white">
            {' '}
            please Login
          </Link>
        </h2>
      </div>
    </form>
  );
}
