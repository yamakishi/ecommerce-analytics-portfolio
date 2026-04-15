'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { navLinks } from '@/utils/navigation';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded((prev) => !prev);

  return (
    <aside
      className={cn(
        'bg-background sticky top-0 z-20 hidden h-screen flex-col border-r transition-all duration-300 ease-in-out sm:flex',
        isExpanded ? 'w-64' : 'w-20'
      )}
    >
      {/* Botão de Expandir/Recolher */}
      <button
        onClick={toggleSidebar}
        className="bg-background hover:bg-accent absolute top-6 -right-3 z-50 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm transition-colors focus:outline-none"
        aria-label={isExpanded ? 'Recolher menu' : 'Expandir menu'}
      >
        {isExpanded ? (
          <PanelLeftClose className="text-muted-foreground h-3.5 w-3.5" />
        ) : (
          <PanelLeftOpen className="text-muted-foreground h-3.5 w-3.5" />
        )}
      </button>

      {/* Cabeçalho / Logo */}
      <div className="bg-muted/20 flex h-16 items-center border-b px-4">
        <Link
          href="/"
          className={cn(
            'text-primary flex items-center transition-all',
            isExpanded ? 'w-full gap-2 px-2' : 'w-full justify-center'
          )}
        >
          <div className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            <LayoutDashboard className="text-primary-foreground h-5 w-5" />
          </div>
          {isExpanded && (
            <span className="text-lg font-bold tracking-tight whitespace-nowrap">
              EcoAnalytics
            </span>
          )}
        </Link>
      </div>

      {/* Navegação Principal */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <nav className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                  isExpanded ? 'justify-start gap-3' : 'justify-center',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Icon
                  className={cn(
                    'h-5 w-5 shrink-0 transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                />

                {/* Texto visível apenas quando expandido */}
                {isExpanded && (
                  <span className="whitespace-nowrap">{link.name}</span>
                )}

                {/* Tooltip visível apenas no hover quando o menu está recolhido */}
                {!isExpanded && (
                  <div className="bg-foreground text-background absolute left-full z-50 ml-2 hidden rounded-md px-2 py-1.5 text-xs font-medium whitespace-nowrap shadow-md group-hover:block">
                    {link.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Rodapé / Perfil do Usuário */}
        <div className="space-y-4">
          <Separator className="opacity-50" />
          <div
            className={cn(
              'flex items-center gap-3 py-2 transition-all',
              isExpanded ? 'px-2' : 'justify-center'
            )}
          >
            <div className="bg-muted border-border group relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border">
              <User className="text-muted-foreground h-5 w-5" />

              {/* Tooltip do usuário quando o menu está recolhido */}
              {!isExpanded && (
                <div className="bg-foreground text-background absolute left-full z-50 ml-4 hidden rounded-md px-2 py-1.5 text-xs font-medium whitespace-nowrap shadow-md group-hover:block">
                  Perfil de Gabriel
                </div>
              )}
            </div>

            {isExpanded && (
              <div className="flex flex-col overflow-hidden whitespace-nowrap">
                <span className="text-foreground truncate text-sm font-semibold">
                  Gabriel Yamakishi
                </span>
                <span className="text-muted-foreground truncate text-[11px] leading-none">
                  Desenvolvedor Frontend
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
