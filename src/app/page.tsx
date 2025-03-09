'use client';

import { FloatingActionButton } from '@/components/floating-action-button';
import { FoodRecordCard } from '@/components/food-record-card';
import { useFoodRecords } from '@/hooks/use-food-records';
import { Camera, Utensils } from 'lucide-react';
import { FC } from 'react';

const HomePage: FC = () => {
  const { getTodayRecords } = useFoodRecords();
  const todayRecords = getTodayRecords();

  return (
    <div className="relative container h-full w-full overflow-auto overscroll-contain">
      <div className="h-6 w-full md:h-0"></div>

      <h1 className="mb-4 p-4 text-2xl font-bold md:mb-6 md:p-6">今日</h1>

      <div className="space-y-6 px-4 md:px-6">
        {todayRecords.length > 0 ? (
          <div>
            <h2 className="mb-4 text-xl font-semibold">今日记录</h2>
            <div className="space-y-4">
              {todayRecords.map((record) => (
                <FoodRecordCard key={record.id} record={record} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-muted rounded-full p-4">
              <Utensils className="text-muted-foreground size-8" />
            </div>
            <h2 className="mt-4 text-xl font-semibold">今日暂无记录</h2>
            <p className="text-muted-foreground mt-2 max-w-md">点击右下角的按钮拍摄食物，开始记录您的饮食</p>
          </div>
        )}

        {todayRecords.length > 0 && (
          <div>
            <h2 className="mb-4 text-xl font-semibold">营养摄入分析</h2>
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-medium">总热量</h3>
                <p className="mt-1 text-2xl font-bold">
                  {todayRecords.reduce((total, record) => total + (record.nutrition?.calories ?? 0), 0)} 千卡
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-medium">蛋白质</h3>
                  <p className="mt-1 text-xl font-bold">
                    {todayRecords.reduce((total, record) => total + (record.nutrition?.protein ?? 0), 0)} 克
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-medium">脂肪</h3>
                  <p className="mt-1 text-xl font-bold">
                    {todayRecords.reduce((total, record) => total + (record.nutrition?.fat ?? 0), 0)} 克
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-medium">碳水</h3>
                  <p className="mt-1 text-xl font-bold">
                    {todayRecords.reduce((total, record) => total + (record.nutrition?.carbs ?? 0), 0)} 克
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-24 w-full md:h-12"></div>

      {/* 悬浮操作按钮 */}
      <FloatingActionButton href="/capture" icon={<Camera className="size-6" />} />
    </div>
  );
};

export default HomePage;
