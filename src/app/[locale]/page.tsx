import Contact from '@/components/sections/home/Contact';
import Hero from '@/components/sections/home/Hero';
import Experinces from '@/components/sections/home/Experinces';
import Recap from '@/components/sections/home/Recap';

export default async function Home() {
  return (
    <main className="container">
      <Hero />
      <Recap />
      <Experinces />
      <Contact />
    </main>
  );
}
