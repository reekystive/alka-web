import { FC } from 'react';

const DiscoverPage: FC = () => {
  return (
    <div className="container w-full h-full overflow-auto overscroll-contain">
      <h1 className="text-2xl font-bold p-4 md:p-6 mb-4 md:mb-6">发现</h1>

      <div className="flex flex-col gap-4 md:gap-6">
        <section>
          <h2 className="text-xl font-semibold px-4 md:px-6 mb-3 md:mb-4">推荐食谱</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-6 gap-3 md:gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-muted/30 rounded-lg md:p-4 flex flex-col">
                <div className="h-24 md:h-32 bg-muted/50 rounded-md flex items-center justify-center">食谱图片</div>
                <div className="p-2">
                  <h3 className="font-medium text-sm md:text-base truncate">健康食谱 {index + 1}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                    这是一道美味又健康的食谱，富含蛋白质和维生素。
                  </p>
                  <div className="mt-2 text-xs md:text-sm flex flex-wrap gap-1">
                    <span className="inline-block bg-primary/10 text-primary rounded-full px-2 py-0.5">低脂</span>
                    <span className="inline-block bg-primary/10 text-primary rounded-full px-2 py-0.5">高蛋白</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-xl w-full font-semibold px-4 md:px-6 mb-3 md:mb-4">热门食物</h2>
          <div className="overflow-x-auto w-full px-4 md:px-6 flex flex-row gap-3 min-w-0">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-24 md:w-32">
                <div className="h-24 md:h-32 bg-muted/30 rounded-lg flex items-center justify-center mb-2">
                  食物 {index + 1}
                </div>
                <div className="font-medium text-xs md:text-sm truncate">热门食物 {index + 1}</div>
                <div className="text-xs text-muted-foreground">300 卡路里</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold px-4 md:px-6 mb-3 md:mb-4">健康饮食建议</h2>
          <div className="flex flex-col gap-2 md:gap-3 px-4 md:px-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="p-3 md:p-4 bg-muted/30 rounded-lg">
                <h3 className="font-medium mb-1 text-sm md:text-base truncate">饮食建议 {index + 1}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                  这是一条基于您的饮食习惯和健康目标的个性化建议，帮助您保持健康的生活方式。
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-4 md:h-6"></div>
      </div>
    </div>
  );
};

export default DiscoverPage;
