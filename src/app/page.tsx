import { AppLayout } from '@/components/app-layout';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <AppLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">今日</h1>
        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">今日摄入</h2>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">今日数据图表区域</div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">营养摄入分析</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">营养素分析 1</div>
              <div className="p-4 bg-muted/30 rounded-lg">营养素分析 2</div>
              <div className="p-4 bg-muted/30 rounded-lg">营养素分析 3</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
