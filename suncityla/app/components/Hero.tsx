import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-no-repeat flex items-start justify-center p-10">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="hero-content relative z-10">
        <h1 className=" text-6xl text-white font-bold">
          Join Los Angeles <br />
          Move to Solar Power!
        </h1>
        <h2 className=" text-3xl font-bold mt-[33px] text-yellow-300">
          We’re helping LA set up solar energy.{" "}
        </h2>
        <p className=" text-xl text-white font-medium mt-[33px] w-1/2">
          This project provides a free service where a city-hired specialist
          evaluates the installation and maintenance costs of solar panels.
        </p>
        <div className="flex justify-center pt-10 ">
          <Button
            size="lg"
            className="font-bold text-white bg-blue-800 hover:bg-blue-900"
          >
            <Link href="/bookings">Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
