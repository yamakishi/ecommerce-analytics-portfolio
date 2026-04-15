import {
  Order,
  RevenueData,
  DashboardMetrics,
  TrafficSource,
  Customer,
} from '../types';

export const mockMetrics: DashboardMetrics = {
  totalRevenue: 45231.89,
  totalOrders: 356,
  conversionRate: 3.2,
};

export const mockRevenueData: RevenueData[] = [
  { date: '01/04', revenue: 1200 },
  { date: '02/04', revenue: 2100 },
  { date: '03/04', revenue: 1800 },
  { date: '04/04', revenue: 2900 },
  { date: '05/04', revenue: 2500 },
  { date: '06/04', revenue: 3800 },
  { date: '07/04', revenue: 3100 },
];

export const mockRecentOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'João Silva',
    email: 'joao@email.com',
    totalAmount: 250.0,
    status: 'Entregue',
    date: '2024-04-07',
  },
  {
    id: 'ORD-002',
    customerName: 'Maria Oliveira',
    email: 'maria@email.com',
    totalAmount: 890.5,
    status: 'Enviado',
    date: '2024-04-07',
  },
  {
    id: 'ORD-003',
    customerName: 'Carlos Souza',
    email: 'carlos@email.com',
    totalAmount: 125.9,
    status: 'Processando',
    date: '2024-04-06',
  },
  {
    id: 'ORD-004',
    customerName: 'Ana Costa',
    email: 'ana@email.com',
    totalAmount: 450.0,
    status: 'Pendente',
    date: '2024-04-06',
  },
];

export const mockTrafficSources: TrafficSource[] = [
  { name: 'Direto', value: 40 },
  { name: 'E-mail', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Busca Orgânica', value: 15 },
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Gabriel Yamakishi',
    email: 'gabriel@dev.com',
    totalSpent: 2500.0,
    lastOrder: '2024-04-10',
  },
  {
    id: '2',
    name: 'Ana Oliveira',
    email: 'ana@teste.com',
    totalSpent: 1200.5,
    lastOrder: '2024-04-09',
  },
  {
    id: '3',
    name: 'Lucas Santos',
    email: 'lucas@email.com',
    totalSpent: 450.0,
    lastOrder: '2024-04-08',
  },
  {
    id: '4',
    name: 'Mariana Silva',
    email: 'mari@vendas.com',
    totalSpent: 8900.0,
    lastOrder: '2024-04-07',
  },
  {
    id: '5',
    name: 'Roberto Junior',
    email: 'beto@gmail.com',
    totalSpent: 150.75,
    lastOrder: '2024-04-06',
  },
];
