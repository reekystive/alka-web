'use client';

/**
 * AppLayout Component
 *
 * This component provides the main layout structure for the EatWise application.
 * It includes:
 * - A responsive layout with sidebar for desktop and bottom navigation for mobile
 * - Navigation tabs for different sections of the application
 * - Active state highlighting for the current route
 *
 * The layout adapts to different screen sizes, showing a sidebar on desktop
 * and a bottom navigation bar on mobile devices.
 */

import { Calendar, History, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/component';
import { FC, ReactNode } from 'react';
import Link from 'next/link';

/**
 * TabItem interface defines the structure for navigation tabs
 * - id: Unique identifier for the tab
 * - label: Display text for the tab
 * - icon: React component to be used as the tab icon
 * - path: URL path the tab links to
 */
interface TabItem {
  id: string;
  label: string;
  icon: ReactNode;
  path: string;
}

/**
 * Props for the AppLayout component
 */
interface AppLayoutProps {
  children: ReactNode;
}

/**
 * AppLayout component provides the main application layout with navigation tabs
 * It wraps the main content and displays a tab bar at the bottom
 */
export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const tabs: TabItem[] = [
    {
      id: 'today',
      label: '今日',
      icon: <Calendar className="size-5" />,
      path: '/',
    },
    {
      id: 'history',
      label: '历史',
      icon: <History className="size-5" />,
      path: '/history',
    },
    {
      id: 'settings',
      label: '设置',
      icon: <Settings className="size-5" />,
      path: '/settings',
    },
  ];

  /**
   * Determines if a navigation path is currently active
   * @param path - The path to check against the current URL
   * @returns true if the path is active, false otherwise
   */
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Desktop sidebar navigation */}
      <nav className="hidden md:flex flex-col w-64 h-full border-r bg-sidebar">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-sidebar-foreground">EatWise</h1>
        </div>
        <div className="flex flex-col flex-1 p-2 space-y-1">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                'text-sidebar-foreground/70 hover:text-sidebar-foreground',
                'hover:bg-sidebar-accent/50',
                isActive(tab.path) && 'bg-sidebar-accent text-sidebar-foreground font-medium'
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main content area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/* Mobile bottom navigation bar */}
        <nav className="md:hidden flex items-center justify-around border-t bg-sidebar p-1">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.path}
              className={cn(
                'flex flex-col items-center justify-center py-2 px-3 rounded-lg',
                'text-sidebar-foreground/70 hover:text-sidebar-foreground',
                'transition-colors text-xs',
                isActive(tab.path) && 'bg-sidebar-accent text-sidebar-foreground font-medium'
              )}
            >
              {tab.icon}
              <span className="mt-1">{tab.label}</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
};
