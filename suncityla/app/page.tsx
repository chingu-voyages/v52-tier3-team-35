import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/How It Works/HowItWorks";

export default async function Home () {
  return (
    <>
      <Hero />
      <section className=" flex flex-col justify-center items-center mt-14 mb-14">
        <h2 className="text-3xl font-semibold mb-6 text-center heading">About</h2>
        <p className="text-lg text-black w-[600px]">SunCityLA is project that provides a free service where a city-hired specialist  evaluates the installation and maintenance costs of solar panels.</p>
      </section>
      <HowItWorks />
      <Footer />
    </>
  );
}
