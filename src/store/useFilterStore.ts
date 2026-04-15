import { create } from 'zustand';

// O "Contrato" do nosso estado
interface FilterState {
  dateRange: '7d' | '30d' | 'all';
  category: string;
  setDateRange: (range: '7d' | '30d' | 'all') => void;
  setCategory: (category: string) => void;
}

// A Store
export const useFilterStore = create<FilterState>((set) => ({
  dateRange: '7d', // Padrão: últimos 7 dias
  category: 'all', // Padrão: todas as categorias

  // Ações para alterar o estado
  setDateRange: (range) => set({ dateRange: range }),
  setCategory: (category) => set({ category }),
}));
