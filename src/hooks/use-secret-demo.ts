import { useConsecutiveClicks } from './use-consecutive-clicks';
import { useState, useCallback } from 'react';

/**
 * Hook for handling secret access to the demo page
 * Shows a drawer when user clicks the settings button 5 times within 1 second
 */
export const useSecretDemo = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Show the secret drawer when target click count is reached
  const showSecretDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  // Handle drawer open state changes
  const handleDrawerOpenChange = useCallback((open: boolean) => {
    setIsDrawerOpen(open);
  }, []);

  // Use the generic consecutive clicks hook with 5 clicks, 1 second timeout
  const { handleClick, clickCount } = useConsecutiveClicks({
    targetCount: 5,
    timeout: 1000,
    onComplete: showSecretDrawer,
  });

  return {
    handleClick,
    clickCount,
    isDrawerOpen,
    onDrawerOpenChange: handleDrawerOpenChange,
  };
};
