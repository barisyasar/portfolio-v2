import Hero from "@/components/sections/home/Hero";
import Recap from "@/components/sections/Recap";

export default async function Home() {
  return (
    <div className="container">
      <Hero />
      <Recap />
    </div>
  );
}
