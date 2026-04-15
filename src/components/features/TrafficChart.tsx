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
    legend: {
      orient: isMobile ? 'horizontal' : 'vertical',
      bottom: isMobile ? 0 : 'auto',
      right: isMobile ? 'auto' : 0,
      top: isMobile ? 'auto' : 'center',
      textStyle: {
        color: resolvedTheme === 'dark' ? '#a1a1aa' : '#52525b',
      },
    },
    series: [
      {
        name: 'Tráfego',
        type: 'pie',
        radius: ['40%', '70%'],
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
