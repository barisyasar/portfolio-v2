'use client';

import React, { forwardRef, useRef } from 'react';

import { cn } from '@/lib/utils';
import { AnimatedBeam } from './ui/animated-beam';
import { FrontendIcon, SeoIcon, BackendIcon } from './Icons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import PROFILE_IMG_1 from '../../public/profile_1.webp';

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

export function ServicesBeam() {
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
            <Image
              src={PROFILE_IMG_1}
              alt="Barış YAŞAR"
              fill
              blurDataURL="data:image/webp;base64,UklGRjwDAABXRUJQVlA4WAoAAAAgAAAAmgAAmgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTgEAALANAJ0BKpsAmwA+7XCxVSmmJCMh8ro5MB2JZ27gR02/yUcPl/7AJlCUXsWk85e9Uf/pWd4eqL3/a3SOMtIQ/hdGAvWKfS9TGB5a+Q9A3u9EPH+3k8cpDetlkdD/5+CjBHhmqwvOiS+YU/LhyYiG9eToKkwP3AAA/uqhTuk/U/0Xe5aKv5pVs1SFmfqZkavUfuZJabPF64x0c8h4HkQDJaoc2SzcCzd7VCARPlz4qPws/XXLGguv7r3lx8zFHsVT42gF5n9RinEcfKQUCl+G5qw9swaB/G4N1X55lSJTg3WoN8uoEDpgB71wbiESCjOHfJUxy+B8uEfffUWGoubBCA7ovKUUAkVDtCTNI66y2jJWmt+ym1LLMk1MPxChIkcuXF5cxQeIrYEL01j2qWles4n4qg63mssjktcxPIHytUWjQlL0G5YlHuZR/60RQAA="
            />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-between">
          <Circle ref={div1Ref} title="Frontend">
            <FrontendIcon />
          </Circle>
          <Circle ref={div3Ref} title="Backend">
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
