export function PerformanceMetrics() {
  const metrics = [
    { name: 'Lighthouse Score', value: '98', unit: '' },
    { name: 'Bundle Size', value: '45', unit: 'KB' },
    { name: 'First Contentful Paint', value: '0.8', unit: 's' }
  ];

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Performance</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Optimized for the best user experience
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="rounded-xl border bg-card p-6 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-muted-foreground">
              {metric.name}
            </p>
            <p className="mt-2 text-4xl font-bold">
              {metric.value}
              {metric.unit && (
                <span className="text-xl text-muted-foreground">
                  {metric.unit}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
