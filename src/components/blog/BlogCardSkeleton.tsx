import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

export function BlogCardSkeleton() {
  return (
    <Card className="card--5 overflow-hidden">
      <Skeleton className="relative w-full" style={{ paddingTop: '52.5%' }} />
      <div className="p-4">
        <Skeleton className="mb-2 h-7 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <div className="flex gap-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
