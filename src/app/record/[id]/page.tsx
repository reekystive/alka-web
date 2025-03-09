'use client';

import { FoodRecord, FoodRecordStatus, formatDateTime } from '@/utils/food-record';
import { ChevronLeft, Clock, Loader2, X } from 'lucide-react';
import { useFoodRecords } from '@/hooks/use-food-records';
import { useParams, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

const RecordDetailPage: FC = () => {
  const params = useParams();
  const router = useRouter();
  const { getRecord } = useFoodRecords();
  const [record, setRecord] = useState<FoodRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const recordId = Array.isArray(params.id) ? params.id[0] : params.id;
      if (recordId) {
        const foundRecord = getRecord(recordId);
        setRecord(foundRecord ?? null);
      }
      setLoading(false);
    }
  }, [params.id, getRecord]);

  // 如果记录不存在，返回首页
  useEffect(() => {
    if (!loading && !record) {
      router.push('/');
    }
  }, [loading, record, router]);

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!record) {
    return null;
  }

  return (
    <div className="bg-background flex h-full w-full flex-col">
      {/* 顶部导航栏 */}
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-1 text-sm">
          <ChevronLeft className="size-5" />
          <span>返回</span>
        </Link>
        <h1 className="text-lg font-semibold">食物详情</h1>
        <div className="w-16"></div>
      </div>

      {/* 主要内容 */}
      <div className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-md space-y-6">
          {/* 食物图片 */}
          {record.imageUrls.length > 0 && (
            <div className="overflow-hidden rounded-lg">
              <img src={record.imageUrls[0]} alt={record.name} className="h-64 w-full object-cover" />
            </div>
          )}

          {/* 食物信息 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{record.name}</h2>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="size-4" />
              <span>{formatDateTime(record.mealTime)}</span>
            </div>
            {record.description && <p className="text-muted-foreground">{record.description}</p>}
          </div>

          {/* 分析状态 */}
          {record.status === FoodRecordStatus.ANALYZING && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Loader2 className="size-8 animate-spin text-primary" />
              <p className="mt-4 text-lg font-medium">正在分析食物成分...</p>
              <p className="text-muted-foreground mt-2">这可能需要几秒钟时间</p>
            </div>
          )}

          {/* 分析结果 */}
          {record.status === FoodRecordStatus.COMPLETED && record.nutrition && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">营养成分分析</h3>

              {/* 卡路里 */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">总热量</h4>
                  <span className="text-2xl font-bold">{record.nutrition.calories} 千卡</span>
                </div>
              </div>

              {/* 主要营养素 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">{record.nutrition.protein}g</div>
                  <div className="text-muted-foreground text-sm">蛋白质</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">{record.nutrition.fat}g</div>
                  <div className="text-muted-foreground text-sm">脂肪</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">{record.nutrition.carbs}g</div>
                  <div className="text-muted-foreground text-sm">碳水</div>
                </div>
              </div>

              {/* 详细营养素 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b py-2">
                  <span>纤维素</span>
                  <span className="font-medium">{record.nutrition.fiber}g</span>
                </div>
                <div className="flex items-center justify-between border-b py-2">
                  <span>糖</span>
                  <span className="font-medium">{record.nutrition.sugar}g</span>
                </div>
                <div className="flex items-center justify-between border-b py-2">
                  <span>钠</span>
                  <span className="font-medium">{record.nutrition.sodium}mg</span>
                </div>
              </div>
            </div>
          )}

          {/* 分析失败 */}
          {record.status === FoodRecordStatus.FAILED && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="bg-destructive/10 text-destructive rounded-full p-4">
                <X className="size-8" />
              </div>
              <p className="mt-4 text-lg font-medium">分析失败</p>
              <p className="text-muted-foreground mt-2">无法识别食物成分，请尝试重新拍摄</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordDetailPage;
