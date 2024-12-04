'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

export default function NavbarToggle ({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center mx-4 py-4 md:mx-9 md:py-9">
      <div>
        <Link href="/" className="text-2xl font-semibold md:text-4xl">
          SunCityLA
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:block md:static z-[900]`}
      >
        <div className="flex flex-col items-start gap-4 p-4 md:flex-row md:justify-end md:items-center md:gap-6 font-semibold">
          {/* if admin is logged in, show sign out button and dashboard link */}
          {session?.user ? (
            <>
              <Link href="/admin" className="hover:text-[#7F95D1]">
                Dashboard
              </Link>
              <Button
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/admin/signin`,
                  })
                }
                variant={'destructive'}
              >
                {' '}
                Sign Out{' '}
              </Button>
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-[#7F95D1]">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#7F95D1]">
                About
              </Link>
              <Link href="/booking" className="hover:text-[#7F95D1]">
                Booking
              </Link>
              <Link href="/admin/signin">
                <Button className="font-bold">Admin Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
