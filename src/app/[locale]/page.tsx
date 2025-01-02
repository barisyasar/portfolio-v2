import Contact from "@/components/sections/home/Contact";
import Hero from "@/components/sections/home/Hero";
import Projects from "@/components/sections/home/Projects";
import Recap from "@/components/sections/home/Recap";

export default async function Home() {
  return (
    <div className="container">
      <Hero />
      <Recap />
      <Projects />
      <Contact />
    </div>
  );
}
