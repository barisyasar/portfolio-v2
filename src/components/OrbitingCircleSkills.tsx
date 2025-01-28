import { ExpressIcon, NextIcon, NodeIcon, ReactIcon, SeoIcon } from './Icons';
import OrbitingCircles from './ui/orbiting-circles';

export default function OrbitingCircleSkills() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-4xl font-semibold leading-none opacity-20 2xs:text-5xl xs:text-6xl">
        Web Development
      </span>

      <OrbitingCircles duration={20} delay={10} radius={70}>
        <NodeIcon />
      </OrbitingCircles>
      <OrbitingCircles radius={70} duration={20} delay={20}>
        <ReactIcon />
      </OrbitingCircles>
      <OrbitingCircles radius={120} duration={20} delay={10} reverse>
        <NextIcon className="size-9" />
      </OrbitingCircles>
      <OrbitingCircles radius={120} duration={20} delay={20} reverse>
        <SeoIcon className="size-8" />
      </OrbitingCircles>
    </div>
  );
}
