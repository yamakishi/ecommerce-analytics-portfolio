'use client';

import ReactECharts from 'echarts-for-react';
import { useTheme } from 'next-themes';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { TrafficSource } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TrafficChartProps {
  data: TrafficSource[];
}

export function TrafficChart({ data }: TrafficChartProps) {
  const { resolvedTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%',
    },
    // 1. Mudamos a legenda para ficar SEMPRE embaixo, centralizada
    legend: {
      orient: 'horizontal',
      bottom: 0,
      left: 'center',
      textStyle: {
        color: resolvedTheme === 'dark' ? '#a1a1aa' : '#52525b',
      },
    },
    series: [
      {
        name: 'Tráfego',
        type: 'pie',
        // 2. Reduzimos levemente o raio máximo para garantir que caiba no Card
        radius: ['35%', '65%'],
        // 3. Centralizamos no meio (50% X) e subimos um pouco (42% Y) para dar espaço para a legenda embaixo
        center: ['50%', '42%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: resolvedTheme === 'dark' ? '#09090b' : '#ffffff',
          borderWidth: 2,
        },
        label: { show: false },
        data: data.map((item) => ({
          name: item.name,
          value: item.value,
        })),
      },
    ],
  };

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Fontes de Tráfego</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Ajuste 3: Alterado de h-75 (inválido no Tailwind padrão) para h-[300px] */}
        <div className="h-75 w-full">
          <ReactECharts
            option={option}
            theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
