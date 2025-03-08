import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="container w-full h-full overflow-auto overscroll-contain">
      <h1 className="text-2xl font-bold p-4 md:p-6 mb-4 md:mb-6">今日</h1>

      <div className="space-y-6 px-4 md:px-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">今日摄入</h2>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">今日数据图表区域</div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">营养摄入分析</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">营养素分析 1</div>
            <div className="p-4 bg-muted/30 rounded-lg">营养素分析 2</div>
            <div className="p-4 bg-muted/30 rounded-lg">营养素分析 3</div>
          </div>
        </div>
      </div>

      <div className="w-full h-4 md:h-6"></div>
    </div>
  );
};

export default HomePage;
