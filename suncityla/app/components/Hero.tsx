import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-no-repeat flex items-start justify-center p-[40px_20px]">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className=" text-6xl text-white font-bold">
          Join Los Angeles <br />
          Move to Solar Power!
        </h1>
        <h2 className=" text-3xl text-white font-bold mt-[33px]">
          We’re helping LA set up solar energy.{" "}
        </h2>
        <p className=" text-xl text-white font-medium mt-[33px] w-1/2">
          This project provides a free service where a city-hired specialist
          evaluates the installation and maintenance costs of solar panels.
        </p>
        <div className="flex justify-center pt-10 ">
          <Link
            href="/bookings"
            className="px-28 py-4 rounded-lg text-white bookingBtn"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
