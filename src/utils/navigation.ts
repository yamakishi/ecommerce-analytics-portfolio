// src/utils/navigation.ts
import { LayoutDashboard, PieChart, Users } from 'lucide-react';

export const navLinks = [
  { name: 'Visão Geral', href: '/', icon: LayoutDashboard },
  { name: 'Relatórios', href: '/reports', icon: PieChart },
  { name: 'Clientes', href: '/customers', icon: Users },
];
