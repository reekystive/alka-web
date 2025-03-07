import { ThemeToggle } from '@/components/theme/theme-toggle';
import { FC } from 'react';

const SettingsPage: FC = () => {
  return (
    <div className="container overflow-auto overscroll-contain p-6">
      <h1 className="text-2xl font-bold mb-6">设置</h1>
      <div className="space-y-6">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">应用设置</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <div className="font-medium">主题</div>
                <div className="text-sm text-muted-foreground">切换应用的明暗主题</div>
              </div>
              <ThemeToggle />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <div className="font-medium">语言</div>
                <div className="text-sm text-muted-foreground">选择应用的显示语言</div>
              </div>
              <select className="bg-background border rounded-md px-3 py-1">
                <option value="zh">中文</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <div className="font-medium">通知</div>
                <div className="text-sm text-muted-foreground">管理应用的通知设置</div>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-background transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">个人信息</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">姓名</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">年龄</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="请输入年龄"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">身高 (cm)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="请输入身高"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">体重 (kg)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="请输入体重"
                />
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
              保存设置
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
