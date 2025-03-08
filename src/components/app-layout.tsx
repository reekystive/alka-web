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

import { Beef, Calendar, Compass, History, Settings, User } from 'lucide-react';
import { FC, MouseEventHandler, ReactNode, useMemo } from 'react';
import { SecretDrawer } from '@/components/secret-drawer';
import { useSecretDemo } from '@/hooks/use-secret-demo';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/component';
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
 * Props for the NavTab component
 */
interface NavTabProps {
  tab: TabItem;
  variant: 'desktop' | 'mobile';
  pathname: string;
  onTabItemClick?: () => void;
}

/**
 * NavTab component renders a single navigation tab
 */
const NavTab: FC<NavTabProps> = ({ tab, variant, pathname, onTabItemClick }) => {
  /**
   * Determines if a navigation path is currently active
   */
  const isActive = () => {
    if (tab.path === '/' && pathname === '/') return true;
    if (tab.path !== '/' && pathname.startsWith(tab.path)) return true;
    return false;
  };

  // Handle click event, trigger onTabItemClick if it's the settings tab
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => {
    if (tab.id === 'settings' && onTabItemClick) {
      // Call onTabItemClick to handle consecutive click logic
      onTabItemClick();
    }
  };

  if (variant === 'desktop') {
    return (
      <Link
        href={tab.path}
        onClick={handleClick}
        className={cn(
          'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
          'text-sidebar-foreground opacity-50',
          { 'hover:opacity-80': !isActive() },
          { 'bg-sidebar-accent opacity-100 hover:opacity-100': isActive() }
        )}
      >
        {tab.icon}
        <span>{tab.label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={tab.path}
      onClick={handleClick}
      className={cn(
        'text-sidebar-foreground opacity-40 hover:opacity-80',
        'transition-colors text-xs',
        'pb-[env(safe-area-inset-bottom)]',
        { 'opacity-100': isActive() }
      )}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        {tab.icon}
        <span className="mt-1">{tab.label}</span>
      </div>
    </Link>
  );
};

/**
 * Props for the DesktopSidebar component
 */
interface DesktopSidebarProps {
  tabs: TabItem[];
  pathname: string;
  onTabItemClick?: () => void;
}

/**
 * DesktopSidebar component renders the sidebar navigation for desktop view
 */
const DesktopSidebar: FC<DesktopSidebarProps> = ({ tabs, pathname, onTabItemClick }) => {
  return (
    <nav className="hidden md:flex flex-col w-56 h-full border-r bg-sidebar shrink-0 grow-0">
      <div className="px-5 py-4 flex flex-row items-center gap-2">
        <Beef className="size-6" />
        <h1 className="text-xl font-semibold text-sidebar-foreground">EatWise</h1>
      </div>
      <hr className="h-[1px] bg-sidebar-accent" />
      <div className="flex flex-col flex-1 p-2 gap-2 overflow-y-auto">
        {tabs.map((tab) => (
          <NavTab key={tab.id} tab={tab} pathname={pathname} variant="desktop" onTabItemClick={onTabItemClick} />
        ))}
      </div>
      <div className="px-5 py-4 flex flex-row items-center gap-2">
        <div className="rounded-full bg-sidebar-accent p-2">
          <User className="size-5" />
        </div>
        <div className="text-sm text-sidebar-foreground">John Doe</div>
      </div>
    </nav>
  );
};

/**
 * Props for the MobileNavBar component
 */
interface MobileNavBarProps {
  tabs: TabItem[];
  pathname: string;
  onTabItemClick?: () => void;
}

/**
 * MobileNavBar component renders the bottom navigation bar for mobile view
 */
const MobileNavBar: FC<MobileNavBarProps> = ({ tabs, pathname, onTabItemClick }) => {
  return (
    <nav className="fixed md:hidden h-[calc(56px+env(safe-area-inset-bottom))] border-t-[1px] box-content bg-sidebar bottom-0 left-0 right-0 touch-none shrink-0 grow-0">
      <div
        className={`h-full w-full grid items-stretch justify-center`}
        style={useMemo(() => ({ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }), [tabs.length])}
      >
        {tabs.map((tab) => (
          <NavTab key={tab.id} tab={tab} pathname={pathname} variant="mobile" onTabItemClick={onTabItemClick} />
        ))}
      </div>
    </nav>
  );
};

/**
 * MobileNavBarPlaceholder's height should be exactly the same as the MobileNavBar
 */
const MobileNavBarPlaceholder: FC = () => {
  return (
    <div className="md:hidden h-[calc(56px+env(safe-area-inset-bottom))] border-t-[1px] box-content invisible shrink-0 grow-0" />
  );
};

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
  const { handleClick, isDrawerOpen, onDrawerOpenChange } = useSecretDemo();

  const tabs: TabItem[] = [
    {
      id: 'today',
      label: '今日',
      icon: <Calendar className="size-5" />,
      path: '/',
    },
    {
      id: 'discover',
      label: '发现',
      icon: <Compass className="size-5" />,
      path: '/discover',
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

  return (
    <div className="flex flex-col md:flex-row h-full w-full overflow-clip relative">
      <DesktopSidebar tabs={tabs} pathname={pathname} onTabItemClick={handleClick} />
      <main className="flex-1 flex flex-col h-full overflow-clip min-w-0">
        <div className="flex-1 w-full flex flex-col justify-start items-center min-h-0">{children}</div>
        <MobileNavBarPlaceholder />
      </main>
      <MobileNavBar tabs={tabs} pathname={pathname} onTabItemClick={handleClick} />

      {/* Secret drawer */}
      <SecretDrawer isOpen={isDrawerOpen} onOpenChange={onDrawerOpenChange} />
    </div>
  );
};
