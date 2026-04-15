import * as React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="bg-muted/40 flex min-h-screen transition-all duration-300">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-background z-10 flex h-14 items-center justify-between gap-4 border-b px-4 sm:justify-end lg:h-15 lg:px-6">
          <MobileNav />

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
