'use client';

import React, { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from './ui/animated-beam';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

interface ServicesBeamProps {
  services: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
}

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
          <CardTitle className="text-center text-sm">{title}</CardTitle>
        </CardHeader>
      )}
    </Card>
  );
});

Circle.displayName = 'Circle';

export function ServicesBeamInner({ services }: ServicesBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainItemRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);

  // Destructure the array - first item is main, rest are secondary
  const [mainService, ...otherServices] = services;

  return (
    <div
      className="card--5 relative flex h-[275px] w-full items-center justify-center overflow-hidden rounded-lg border p-4 xs:h-[350px]"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg justify-between gap-10">
        {/* Main item on the left */}
        <div className="flex flex-row items-center justify-center">
          <Circle ref={mainItemRef} title={mainService.title}>
            {mainService.icon}
          </Circle>
        </div>

        {/* Three items on the right */}
        <div className="flex flex-col items-center justify-between">
          {otherServices.map((service, index) => {
            const refs = [frontendRef, backendRef, seoRef];
            return (
              <Circle
                key={service.title}
                ref={refs[index]}
                title={service.title}
              >
                {service.icon}
              </Circle>
            );
          })}
        </div>
      </div>

      {/* Animated beams */}
      {[frontendRef, backendRef, seoRef].map((ref, index) => (
        <AnimatedBeam
          key={index}
          duration={5}
          containerRef={containerRef}
          fromRef={ref}
          toRef={mainItemRef}
          endYOffset={index === 2 ? 0 : undefined}
        />
      ))}
    </div>
  );
}
