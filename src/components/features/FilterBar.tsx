'use client';

import { useFilterStore } from '@/store/useFilterStore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function FilterBar() {
  const { dateRange, setDateRange } = useFilterStore();

  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="text-muted-foreground text-sm font-medium">
        Filtrar por:
      </span>
      <Select
        value={dateRange}
        onValueChange={(value: '7d' | '30d' | 'all') => setDateRange(value)}
      >
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Selecione o período" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7d">Últimos 7 dias</SelectItem>
          <SelectItem value="30d">Últimos 30 dias</SelectItem>
          <SelectItem value="all">Todo o período</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
