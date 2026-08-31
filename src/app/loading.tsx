import Container from '@/common/components/elements/Container';

const Skeleton = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800 ${className}`} />
);

export default function Loading() {
  return (
    <Container>
      <div className="space-y-8">
        {/* Intro */}
        <div className="space-y-3">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20" />
            ))}
          </div>
        </div>

        {/* Section blocks */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <div className="grid gap-5 sm:grid-cols-2">
              {Array.from({ length: 2 }).map((_, j) => (
                <Skeleton key={j} className="h-48" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
