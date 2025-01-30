import Hero from '@/components/sections/services/Hero';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import TechStack from '@/components/sections/services/TechStack';

function Services() {
  return (
    <main className="container">
      <Hero />
      <TechStack />
      <ServicesGrid />
    </main>
  );
}
export default Services;
