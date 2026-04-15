import {
  mockMetrics,
  mockRecentOrders,
  mockRevenueData,
  mockTrafficSources,
  mockCustomers,
} from '../mocks/dashboard-data';
import {
  DashboardMetrics,
  Order,
  RevenueData,
  TrafficSource,
  Customer,
} from '../types';

// Função auxiliar genérica para simular o delay da rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  await delay(800);
  return mockMetrics;
};

export const fetchRevenueData = async (): Promise<RevenueData[]> => {
  await delay(1200);
  return mockRevenueData;
};

export const fetchRecentOrders = async (): Promise<Order[]> => {
  await delay(1000);
  return mockRecentOrders;
};

export const fetchTrafficData = async (): Promise<TrafficSource[]> => {
  await delay(700);
  return mockTrafficSources;
};

// Aqui simulamos uma busca com filtro que usará o useDebounce
export const fetchCustomers = async (
  search: string = ''
): Promise<Customer[]> => {
  await delay(1000);
  if (!search) return mockCustomers;

  return mockCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );
};
