'use client';

import ReactECharts from 'echarts-for-react';
import { useTheme } from 'next-themes';
import { RevenueData } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFilterStore } from '@/store/useFilterStore';

interface RevenueChartProps {
  data: RevenueData[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  const { resolvedTheme } = useTheme(); // Pega se é dark ou light
  const { dateRange } = useFilterStore(); // Lendo o Zustand!

  // Lógica de filtro simulada:
  // Como nosso mock tem 7 dias, vamos simular que "7d" mostra tudo, e "30d" ou "all" mostrariam mais.
  const filteredData = dateRange === '7d' ? data.slice(-3) : data;

  // Extrai as datas e os valores para os eixos do gráfico
  const xAxisData = filteredData.map((item) => item.date);
  const seriesData = filteredData.map((item) => item.revenue);

  const option = {
    backgroundColor: 'transparent', // O Tailwind vai cuidar do fundo
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLine: {
        lineStyle: { color: resolvedTheme === 'dark' ? '#52525b' : '#e4e4e7' },
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: { color: resolvedTheme === 'dark' ? '#27272a' : '#f4f4f5' },
      },
    },
    series: [
      {
        data: seriesData,
        type: 'line',
        smooth: true,
        areaStyle: { opacity: 0.1 },
        itemStyle: { color: '#3b82f6' }, // Azul moderno
      },
    ],
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Receita Diária</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-75 w-full md:h-100">
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
