'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User } from 'lucide-react';
import { navLinks } from '@/utils/navigation';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-background sticky top-0 hidden h-screen w-64 flex-col border-r sm:flex">
      {/* Cabeçalho / Logo */}
      <div className="bg-muted/20 flex h-16 items-center border-b px-6">
        <Link href="/" className="text-primary flex items-center gap-2">
          <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <LayoutDashboard className="text-primary-foreground h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">EcoAnalytics</span>
        </Link>
      </div>

      {/* Navegação Principal */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <nav className="space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Icon
                  className={cn(
                    'h-4 w-4',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Rodapé / Perfil do Usuário */}
        <div className="space-y-4">
          <Separator className="opacity-50" />
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="bg-muted border-border flex h-9 w-9 shrink-0 items-center justify-center rounded-full border">
              <User className="text-muted-foreground h-5 w-5" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-foreground truncate text-sm font-semibold">
                Gabriel Yamakishi
              </span>
              <span className="text-muted-foreground truncate text-[11px] leading-none">
                Desenvolvedor Frontend
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
