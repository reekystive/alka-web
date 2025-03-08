'use client';

import { Laptop, Moon, Sun } from 'lucide-react';
import { useEffect, useState, FC } from 'react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/component';

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant="outline" size="icon">
          {mounted ? (
            <>
              <Sun
                className={cn('absolute h-[1.2rem] w-[1.2rem] opacity-0', {
                  'opacity-100': theme === 'light',
                })}
              />
              <Moon
                className={cn('absolute h-[1.2rem] w-[1.2rem] opacity-0', {
                  'opacity-100': theme === 'dark',
                })}
              />
              <Laptop
                className={cn('absolute h-[1.2rem] w-[1.2rem] opacity-0', {
                  'opacity-100': theme === 'system',
                })}
              />
            </>
          ) : null}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme('light');
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark');
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('system');
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
