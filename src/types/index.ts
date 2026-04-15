// Tipagem para os dados gerais de receita do Dashboard (Para os Gráficos)
export interface RevenueData {
  date: string;
  revenue: number;
}

// Tipagem para os pedidos recentes (Para a Tabela)
export interface Order {
  id: string;
  customerName: string;
  email: string;
  totalAmount: number;
  status: 'Pendente' | 'Processando' | 'Enviado' | 'Entregue';
  date: string;
}

// Tipagem para os cards de resumo (KPIs)
export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  conversionRate: number;
}

// Tipagem para distribuição de tráfego (Gráfico de Rosca/Pizza)
export interface TrafficSource {
  name: string;
  value: number;
}

// Tipagem para Clientes (Tabela detalhada)
export interface Customer {
  id: string;
  name: string;
  email: string;
  totalSpent: number;
  lastOrder: string;
}
