'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/utils/navigation';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent sm:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-70 border-r-0 p-0 shadow-2xl">
        <SheetHeader className="bg-muted/20 border-b p-6 text-left">
          <SheetTitle className="text-primary flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <LayoutDashboard className="text-primary-foreground h-5 w-5" />
            </div>
            <span className="font-bold tracking-tight">EcoAnalytics</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-[calc(100%-80px)] flex-col justify-between p-4">
          <nav className="space-y-1">
            <AnimatePresence>
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-5 w-5',
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        )}
                      />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </nav>

          <div className="space-y-4 pb-4">
            <Separator className="opacity-50" />
            <div className="px-2">
              <p className="text-muted-foreground mb-4 text-[10px] font-bold tracking-widest uppercase">
                Minha Conta
              </p>
              <div className="flex items-center gap-3 px-2">
                <div className="bg-muted border-border h-8 w-8 rounded-full border" />
                <div className="flex flex-col">
                  <span className="text-foreground text-xs font-semibold">
                    Gabriel Yamakishi
                  </span>
                  <span className="text-muted-foreground text-[10px] leading-none">
                    Desenvolvedor Frontend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
