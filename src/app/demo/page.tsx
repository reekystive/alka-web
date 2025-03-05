import { Button } from '@/components/button';

export default function Demo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 space-y-16 max-w-[1200px]">
        {/* 页面标题 */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">组件展示</h1>
          <p className="text-muted-foreground text-lg">这里展示了所有可用的组件及其变体组合</p>
        </div>

        {/* 按钮组件 */}
        <section className="space-y-8">
          <div className="space-y-3 border-b pb-6">
            <h2 className="text-2xl font-semibold tracking-tight">按钮 Button</h2>
            <p className="text-muted-foreground text-lg">按钮组件支持多种样式变体和尺寸</p>
          </div>

          {/* 变体展示 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">变体 Variants</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* 尺寸展示 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">尺寸 Sizes</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* 状态展示 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">状态 States</h3>
              <div className="flex flex-wrap gap-6">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  With Icon
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 这里可以添加更多组件展示区域 */}
        <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-xl border-muted-foreground/20">
          <p className="text-muted-foreground text-lg">更多组件即将添加...</p>
        </div>
      </div>
    </div>
  );
}
