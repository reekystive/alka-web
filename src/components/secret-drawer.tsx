'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface SecretDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Secret drawer component for displaying access to the demo page
 */
export const SecretDrawer: FC<SecretDrawerProps> = ({ isOpen, onOpenChange }) => {
  const router = useRouter();

  const handleNavigateToDemo = () => {
    router.push('/demo');
    onOpenChange(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>🎉 Secret Feature Discovered!</DrawerTitle>
          <DrawerDescription>
            Congratulations on finding the hidden Demo page entrance. This page showcases all available components and
            their variant combinations.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 flex flex-col items-center">
          <p className="text-center mb-4">
            You unlocked this secret feature by clicking the settings button 5 times in a row. Click the button below to
            visit the Demo page.
          </p>
          <div className="w-full max-w-md mx-auto">
            <Button onClick={handleNavigateToDemo} className="w-full">
              Go to Demo Page
            </Button>
          </div>
        </div>
        <DrawerFooter>
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
            }}
            className="w-full"
          >
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
