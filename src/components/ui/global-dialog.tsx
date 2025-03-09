'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useDialog } from '@/contexts/dialog-context';
import { FC } from 'react';

export const GlobalDialog: FC = () => {
  const { isOpen, close, options } = useDialog();

  // 处理确认按钮点击
  const handleAction = () => {
    options?.onAction?.();
    close();
  };

  // 处理取消按钮点击
  const handleCancel = () => {
    options?.onCancel?.();
    close();
  };

  if (!options) return null;

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          {options.title && <AlertDialogTitle>{options.title}</AlertDialogTitle>}
          {options.description && <AlertDialogDescription>{options.description}</AlertDialogDescription>}
        </AlertDialogHeader>

        {options.content ?? null}

        <AlertDialogFooter>
          {options.showCancel !== false && (
            <AlertDialogCancel onClick={handleCancel}>{options.cancelText ?? 'Default Cancel'}</AlertDialogCancel>
          )}
          <AlertDialogAction onClick={handleAction}>{options.actionText ?? 'Default Action'}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
