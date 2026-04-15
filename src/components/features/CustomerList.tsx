'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, User } from 'lucide-react';
import { Customer } from '@/types';
import { fetchCustomers } from '@/services/api';
import { useDebounce } from '@/hooks/useDebounce';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function CustomerList() {
  const [search, setSearch] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  // O debouncedSearch só muda 500ms após o utilizador parar de escrever no 'search'
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const loadCustomers = async () => {
      setLoading(true);
      const data = await fetchCustomers(debouncedSearch);
      setCustomers(data);
      setLoading(false);
    };

    loadCustomers();
  }, [debouncedSearch]); // O useEffect só corre quando o valor COM DEBOUNCE muda!

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          placeholder="Pesquisar por nome ou e-mail..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Base de Clientes ({customers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-50" />
                    <Skeleton className="h-4 w-37.5" />
                  </div>
                </div>
              ))
            ) : customers.length > 0 ? (
              customers.map((customer) => (
                <div
                  key={customer.id}
                  className="hover:bg-muted/50 flex items-center justify-between rounded-lg border p-3 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                      <User className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm leading-none font-medium">
                        {customer.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">
                      R$ {customer.totalSpent.toFixed(2)}
                    </p>
                    <p className="text-muted-foreground text-xs italic">
                      Última compra: {customer.lastOrder}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground py-10 text-center">
                Nenhum cliente encontrado.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
