'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { setDocumentTheme } from './document-theme';
import { Button } from '@/components/ui/button';
import { FC, useEffect } from 'react';

const getTheme = (theme: string) => {
  switch (theme) {
    case 'light':
      return 'light';
    case 'dark':
      return 'dark';
    default:
      throw new Error(`Invalid theme: ${theme}`);
  }
};

export const ThemeToggle: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme || resolvedTheme === 'system') {
      return;
    }
    const theme = getTheme(resolvedTheme);
    setDocumentTheme(theme);
  }, [resolvedTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
