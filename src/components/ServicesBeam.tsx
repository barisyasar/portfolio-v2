'use client';

import React, { forwardRef, useRef } from 'react';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import PROFILE_IMG_4 from '../../public/profile_4.webp';
import { BackendIcon, FrontendIcon, SeoIcon } from './Icons';
import { AnimatedBeam } from './ui/animated-beam';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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
              src={PROFILE_IMG_4}
              alt="Barış YAŞAR"
              fill
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCADBAMEDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBAUD/8QAFxABAQEBAAAAAAAAAAAAAAAAAAEREv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A8cBk7lVFBKAEqACRFSgJWa1WaYZrFbrFCmKxW6xVKjNQoZrFjMahIrUVIpM6oASogA6RFJ0KIpEqoBKiAIBDJKzVqUGzWa1WKZxmsVqsU1RmotQzWNRmLCTWoqRSZ1VZUJUQBOkRSdKiKEqIBNUQ0JVE1NAKlLWbTBWK1WKFRKxWqxTVGaFQ1KsZahIrSsroZ1oZ1dJKiaAnUIE6VVlQmqahppq6mppoSupqamgtLUtLWbTGlrNW1m0KiVitVihcSoUM1EAmt6azq6TOtaazpoRrWjOgGu0QJ0qIgTV01NTQmrpqammi1dTU1nTTrVrNqamgatrNpaloXKlZq2s0LgggUpqJoTWtXWdNDOtaaxqaGVr6aPnoeFr0RBDtVBAmrqampps6trNpazabO1bU1m1LVYi1rU1npNGCVrU1NTSaSrazS1CawECMQShNq6lqWs6pl1WtNQDNrRkAekCIdqoIaaVLSs02dLWbS1i1UY9UtQQ2QmiA41prGrpVrzVQRLaAIRiVWaE2pUBTJRABRAB6aAh1iCGmlZq1mmzqVitViqjDoQDQIIDSmlQlxQE1rAEJQzVqU4ioAaAAAAAeiIIdYioaalSqzTZ1KxW6xVRh0iKhpEEI0oUCoAJawAI0rLVZNnQAyAAAAB6CAh1iKhpozVQIqVmtVKplY+Y1YzYbPESqmAIKJaSIATQAASstVlTOgAIAAAAHcAh1gATUANNRmtJQzrNTGkNOM4jSAYyjSEuIAFIKgJKy1WVM6AAgAAAAdwCHWAgTQAJqIoaKyjSAmUaQBmpVqUlRADMRUBVKy1WTZ0AMgAAAAdoCHWqACoAEVADTUQAlEoAM1KBKiAGYgAkrIGigBpAAAAB//9k="
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
