import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Options for consecutive clicks counter
 */
export interface ConsecutiveClicksOptions {
  /** Target click count, defaults to 5 */
  targetCount?: number;
  /** Timeout to reset count (in milliseconds), defaults to 1000ms */
  timeout?: number;
  /** Callback function when target click count is reached */
  onComplete?: () => void;
}

/**
 * A generic hook for handling consecutive clicks
 * Triggers a callback when user clicks a specified number of times within a time limit
 * Resets count if no click is detected within the specified timeout
 */
export const useConsecutiveClicks = (options?: ConsecutiveClicksOptions) => {
  const { targetCount = 5, timeout = 1000, onComplete } = options ?? {};

  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear the timer
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Reset click count
  const resetCount = useCallback(() => {
    setClickCount(0);
  }, []);

  // Handle click event
  const handleClick = useCallback(() => {
    clearTimer();

    const newCount = clickCount + 1;
    setClickCount(newCount);

    // If target click count is reached
    if (newCount >= targetCount) {
      // Call the callback function if provided
      if (onComplete) {
        onComplete();
      }
      resetCount();
      return;
    }

    // Set timer to reset count after timeout
    timerRef.current = setTimeout(() => {
      resetCount();
    }, timeout);
  }, [clickCount, clearTimer, resetCount, targetCount, timeout, onComplete]);

  // Clean up timer when component unmounts
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return { handleClick, clickCount };
};
