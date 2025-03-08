import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="container h-full w-full overflow-auto overscroll-contain">
      <h1 className="mb-4 p-4 text-2xl font-bold md:mb-6 md:p-6">今日</h1>

      <div className="space-y-6 px-4 md:px-6">
        <div>
          <h2 className="mb-4 text-xl font-semibold">今日摄入</h2>
          <div className="bg-muted/30 flex h-64 items-center justify-center rounded-lg">今日数据图表区域</div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">营养摄入分析</h2>
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4">营养素分析 1</div>
            <div className="bg-muted/30 rounded-lg p-4">营养素分析 2</div>
            <div className="bg-muted/30 rounded-lg p-4">营养素分析 3</div>
          </div>
        </div>
      </div>

      <div className="h-4 w-full md:h-6"></div>
    </div>
  );
};

export default HomePage;
