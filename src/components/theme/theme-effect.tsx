'use client';

import { setDocumentTheme } from './document-theme';
import { useTheme } from 'next-themes';
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

export const useThemeEffect = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme || resolvedTheme === 'system') {
      return;
    }
    const theme = getTheme(resolvedTheme);
    setDocumentTheme(theme);
  }, [resolvedTheme]);
};

export const ThemeEffect: FC = () => {
  useThemeEffect();
  return null;
};
