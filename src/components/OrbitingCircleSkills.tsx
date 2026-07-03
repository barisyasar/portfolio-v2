import { NextIcon, ReactIcon, SeoIcon } from './Icons';
import NodeIcon from './icons/node-icon';
import OrbitingCircles from './ui/orbiting-circles';

export default function OrbitingCircleSkills() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
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
