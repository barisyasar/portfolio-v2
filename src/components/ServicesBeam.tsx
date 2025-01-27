'use client';

import React, { forwardRef, useRef } from 'react';

import { cn } from '@/lib/utils';
import { AnimatedBeam } from './ui/animated-beam';
import { FrontendIcon, SeoIcon, BackendIcon } from './Icons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import PROFILE_IMG_2 from '@/assets/profile_2.webp';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; title?: string }
>(({ className, title, children }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        'z-10 flex size-16 flex-col items-center justify-center border-2 bg-card xs:size-24',
        className,
      )}
    >
      <CardContent>{children}</CardContent>

      {title && (
        <CardHeader className="hidden xs:block">
          <CardTitle className="text-center text-sm">
            <h2>{title}</h2>
          </CardTitle>
        </CardHeader>
      )}
    </Card>
  );
});

Circle.displayName = 'Circle';

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="card--5 relative flex h-[275px] w-full items-center justify-center overflow-hidden rounded-lg border p-4 xs:h-[350px]"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg justify-between gap-10">
        <div className="flex flex-row items-center justify-center">
          <Circle ref={div4Ref} className="relative size-20 overflow-hidden">
            <Image src={PROFILE_IMG_2} alt="Barış Yaşar" fill />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-between">
          <Circle ref={div1Ref} title="Front-End">
            <FrontendIcon />
          </Circle>
          <Circle ref={div3Ref} title="Back-End">
            <BackendIcon />
          </Circle>
          <Circle ref={div5Ref} title="SEO">
            <SeoIcon />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={5}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
      />

      <AnimatedBeam
        duration={5}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        duration={5}
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        endYOffset={0}
      />
    </div>
  );
}
