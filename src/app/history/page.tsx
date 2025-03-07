import { AppLayout } from '@/components/app-layout';
import { FC } from 'react';

const HistoryPage: FC = () => {
  return (
    <AppLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">历史</h1>
        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">历史数据</h2>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">历史数据图表区域</div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">历史记录</h2>
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-medium">记录 {index + 1}</div>
                    <div className="text-sm text-muted-foreground">2023-03-{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="text-right">
                    <div>2000 卡路里</div>
                    <div className="text-sm text-muted-foreground">蛋白质: 120g</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HistoryPage;
