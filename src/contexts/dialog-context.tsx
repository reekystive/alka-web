'use client';

import { FC, ReactNode, createContext, useCallback, useContext, useState } from 'react';

// Dialog 的配置选项
interface DialogOptions {
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  cancelText?: ReactNode;
  actionText?: ReactNode;
  onAction?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
}

// Dialog Context 的类型
interface DialogContextType {
  open: (options: DialogOptions) => void;
  close: () => void;
  isOpen: boolean;
  options: DialogOptions | null;
}

// 创建 Context
const DialogContext = createContext<DialogContextType | null>(null);

// Dialog Provider 的 Props
interface DialogProviderProps {
  children: ReactNode;
}

// Dialog Provider 组件
export const DialogProvider: FC<DialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DialogOptions | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // 打开 Dialog
  const open = useCallback(
    (options: DialogOptions) => {
      // 如果正在关闭，先等待关闭完成
      if (isClosing) {
        setTimeout(() => {
          setOptions(options);
          setIsOpen(true);
        }, 100);
      } else {
        setOptions(options);
        setIsOpen(true);
      }
    },
    [isClosing]
  );

  // 关闭 Dialog
  const close = useCallback(() => {
    setIsOpen(false);
    setIsClosing(true);
    // 延迟清除 options，以便有淡出动画
    setTimeout(() => {
      setOptions(null);
      setIsClosing(false);
    }, 200);
  }, []);

  return <DialogContext.Provider value={{ open, close, isOpen, options }}>{children}</DialogContext.Provider>;
};

// 使用 Dialog 的 Hook
export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
