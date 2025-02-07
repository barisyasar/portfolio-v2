import { Card } from '@/components/ui/card';

export default function Loading() {
  return (
    <Card className="section flex min-h-[calc(100svh-66px-3rem)] flex-col items-center justify-center md:min-h-[calc(100svh-66px-3.5rem)]">
      <div className="flex gap-2">
        <div className="size-3 animate-pulse rounded-full bg-primary delay-100" />
        <div className="size-3 animate-pulse rounded-full bg-primary delay-200" />
        <div className="size-3 animate-pulse rounded-full bg-primary delay-300" />
      </div>
    </Card>
  );
}
