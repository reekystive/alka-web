import { useDialog } from '@/contexts/dialog-context';

export const useGlobalDialogExample = () => {
  const { open } = useDialog();

  // 显示简单的确认对话框
  const showConfirmDialog = (message: string, onConfirm?: () => void) => {
    open({
      title: '确认',
      description: message,
      actionText: '确认',
      cancelText: '取消',
      onAction: onConfirm,
    });
  };

  // 显示只有确认按钮的提示对话框
  const showAlertDialog = (message: string, onClose?: () => void) => {
    open({
      title: '提示',
      description: message,
      actionText: '知道了',
      showCancel: false,
      onAction: onClose,
    });
  };

  // 显示自定义内容的对话框
  const showCustomDialog = (
    title: string,
    content: React.ReactNode,
    options?: {
      description?: string;
      actionText?: string;
      cancelText?: string;
      onAction?: () => void;
      onCancel?: () => void;
      showCancel?: boolean;
    }
  ) => {
    open({
      title,
      content,
      ...options,
    });
  };

  return {
    showConfirmDialog,
    showAlertDialog,
    showCustomDialog,
  };
};
