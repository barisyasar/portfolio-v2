import { ExpressIcon, NextIcon, NodeIcon, ReactIcon } from './Icons';
import OrbitingCircles from './ui/orbiting-circles';

export default function OrbitingCircleSkills() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-6xl font-semibold leading-none opacity-20">
        TypeScript
      </span>

      <OrbitingCircles duration={20} delay={10} radius={70}>
        <NodeIcon />
      </OrbitingCircles>
      <OrbitingCircles radius={70} duration={20} delay={20}>
        <ReactIcon />
      </OrbitingCircles>
      <OrbitingCircles radius={120} duration={20} delay={10} reverse>
        <NextIcon className="size-10" />
      </OrbitingCircles>
      <OrbitingCircles radius={120} duration={20} delay={20} reverse>
        <ExpressIcon className="size-10" />
      </OrbitingCircles>
    </div>
  );
}
