import { MotionDiv } from '@/components/ui/motion-div';

export function FeatureCard({
  icon: Icon,
  title,
  description
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <MotionDiv
      whileHover={{ y: -5 }}
      className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </MotionDiv>
  );
}
