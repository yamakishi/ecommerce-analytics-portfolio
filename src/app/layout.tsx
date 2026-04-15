// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce Analytics',
  description: 'Dashboard de métricas focado em performance e Clean Code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-muted/40 flex min-h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <header className="bg-background flex h-16 items-center justify-between border-b px-4 lg:px-8">
                <MobileNav />
                <div className="ml-auto flex items-center gap-4">
                  <ThemeToggle />
                </div>
              </header>
              <main className="w-full flex-1 overflow-y-auto">
                <div className="mx-auto w-full max-w-400 p-4 lg:p-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
