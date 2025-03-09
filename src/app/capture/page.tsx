'use client';

import { CaptureView } from '@/app/capture/ui/capture-view';
import { useFoodRecords } from '@/hooks/use-food-records';
import { PageHeader } from '@/components/ui/page-header';
import { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 食物拍摄页面
 */
export const CapturePage: FC = () => {
  const router = useRouter();
  const [capturedImageBlob, setCapturedImageBlob] = useState<Blob | null>(null);
  const { addRecord } = useFoodRecords();

  // 将 Blob 转换为 Base64 字符串
  const convertBlobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // 处理拍摄确认
  const handleCaptureConfirm = useCallback(
    async (blob: Blob) => {
      setCapturedImageBlob(blob);

      try {
        // 将 Blob 转换为 Base64 字符串
        const base64Image = await convertBlobToBase64(blob);

        // 创建新的食物记录
        const newRecord = addRecord({
          name: '未命名食物', // 默认名称
          description: '', // 默认描述为空
          mealTime: new Date(), // 默认为当前时间
          imageUrls: [base64Image], // 使用 Base64 字符串
        });

        // 跳转到记录详情页面
        router.push(`/record/${newRecord.id}`);
      } catch (error) {
        console.error('处理图片时出错:', error);
        // 这里可以添加错误处理逻辑，例如显示错误消息
      }
    },
    [addRecord, router]
  );

  return (
    <div className="bg-background flex h-full w-full flex-col items-center">
      <PageHeader title="拍摄食物" />

      {/* 使用 CaptureView 组件 */}
      <CaptureView
        onConfirm={() => {
          if (!capturedImageBlob) return;
          void handleCaptureConfirm(capturedImageBlob);
        }}
        className="w-[500px] max-w-[90%] rounded-lg border-1"
      />
    </div>
  );
};

export default CapturePage;
