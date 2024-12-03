import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero () {
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-no-repeat flex items-start justify-center p-10">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="hero-content relative z-10">
        <h1 className=" text-4xl md:text-6xl text-white font-bold">
          Join Los Angeles <br />
          Move to Solar Power!
        </h1>
        <h2 className=" text-xl md:text-3xl font-bold mt-[33px] text-primary">
          We’re helping LA set up solar energy.{' '}
        </h2>
        <p className=" text-lg md:text-xl text-white font-medium mt-5 md:mt-[33px] md:w-1/2">
          This project provides a free service where a city-hired specialist evaluates the
          installation and maintenance costs of solar panels.
        </p>
        <div className="flex flex-col justify-center items-center pt-10">
          <Link href="/booking/new">
            <Button size="lg" className="font-bold">
              Book Now
            </Button>
          </Link>
          <p className="text-white">or</p>
          <Button size="lg" variant="outline" className="font-bold">
            <Link href="/booking">View booking</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
