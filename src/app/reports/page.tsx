import { Suspense } from 'react';
import { TrafficChart } from '@/components/features/TrafficChart';
import { DashboardSkeleton } from '@/components/features/DashboardSkeleton';
import { fetchTrafficData } from '@/services/api';

async function ReportsData() {
  const trafficData = await fetchTrafficData();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <TrafficChart data={trafficData} />
    </div>
  );
}

export default function ReportsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Relatórios Detalhados
        </h2>
        <p className="text-muted-foreground">
          Análise aprofundada das fontes de tráfego e comportamento do
          consumidor.
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <ReportsData />
      </Suspense>
    </>
  );
}
