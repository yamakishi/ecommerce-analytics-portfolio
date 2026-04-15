import { Suspense } from 'react';
import { RevenueChart } from '@/components/features/RevenueChart';
import { RecentOrdersTable } from '@/components/features/RecentOrdersTable';
import { FilterBar } from '@/components/features/FilterBar';
import { DashboardSkeleton } from '@/components/features/DashboardSkeleton';
import { fetchRevenueData, fetchRecentOrders } from '@/services/api';
import { FadeIn } from '@/components/layout/FadeIn';

async function DashboardData() {
  const [revenueData, recentOrders] = await Promise.all([
    fetchRevenueData(),
    fetchRecentOrders(),
  ]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <FadeIn delay={1}>
          <RevenueChart data={revenueData} />
        </FadeIn>
      </div>

      <div className="col-span-1">
        <FadeIn delay={2}>
          <RecentOrdersTable data={recentOrders} />
        </FadeIn>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <FadeIn>
        <div className="mb-6 flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Visão Geral</h2>
          <p className="text-muted-foreground">
            Acompanhe o desempenho das suas vendas e métricas em tempo real.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <FilterBar />
      </FadeIn>

      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardData />
      </Suspense>
    </>
  );
}
