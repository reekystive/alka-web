import { FoodRecord, FoodRecordStatus, formatTime } from '@/utils/food-record';
import { Clock, Utensils } from 'lucide-react';
import { cn } from '@/utils/component';
import Link from 'next/link';
import { FC } from 'react';

interface FoodRecordCardProps {
  record: FoodRecord;
}

export const FoodRecordCard: FC<FoodRecordCardProps> = ({ record }) => {
  // 根据状态获取不同的样式
  const getStatusBadgeClass = () => {
    switch (record.status) {
      case FoodRecordStatus.CREATING:
        return 'bg-blue-100 text-blue-800';
      case FoodRecordStatus.ANALYZING:
        return 'bg-yellow-100 text-yellow-800';
      case FoodRecordStatus.COMPLETED:
        return 'bg-green-100 text-green-800';
      case FoodRecordStatus.FAILED:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // 获取状态文本
  const getStatusText = () => {
    switch (record.status) {
      case FoodRecordStatus.CREATING:
        return '正在创建';
      case FoodRecordStatus.ANALYZING:
        return '正在分析';
      case FoodRecordStatus.COMPLETED:
        return '分析完成';
      case FoodRecordStatus.FAILED:
        return '分析失败';
      default:
        return '未知状态';
    }
  };

  return (
    <Link href={`/record/${record.id}`} className="block w-full">
      <div className="bg-card hover:bg-card/90 text-card-foreground rounded-lg border p-4 shadow-sm transition-colors">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="size-5" />
            <h3 className="text-lg font-medium">{record.name || '未命名食物'}</h3>
          </div>
          <span
            className={cn(
              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
              getStatusBadgeClass()
            )}
          >
            {getStatusText()}
          </span>
        </div>

        <div className="text-muted-foreground mt-2 flex items-center gap-1 text-sm">
          <Clock className="size-4" />
          <span>{formatTime(record.mealTime)}</span>
        </div>

        {record.description && <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">{record.description}</p>}

        {record.imageUrls.length > 0 && (
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {record.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${record.name} 图片 ${index + 1}`}
                className="h-16 w-16 rounded-md object-cover"
              />
            ))}
          </div>
        )}

        {record.status === FoodRecordStatus.COMPLETED && record.nutrition && (
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-primary/10 rounded-md p-1">
              <div className="font-medium">{record.nutrition.calories}</div>
              <div className="text-muted-foreground">卡路里</div>
            </div>
            <div className="bg-primary/10 rounded-md p-1">
              <div className="font-medium">{record.nutrition.protein}g</div>
              <div className="text-muted-foreground">蛋白质</div>
            </div>
            <div className="bg-primary/10 rounded-md p-1">
              <div className="font-medium">{record.nutrition.carbs}g</div>
              <div className="text-muted-foreground">碳水</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
