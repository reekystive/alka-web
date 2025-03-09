import { FoodRecord, FoodRecordStatus, generateId } from '@/utils/food-record';
import { useCallback, useEffect, useState } from 'react';

// 本地存储键
const STORAGE_KEY = 'eatwise-food-records';

/**
 * 使用食物记录 Hook
 */
export function useFoodRecords() {
  const [records, setRecords] = useState<FoodRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // 从本地存储加载记录
  useEffect(() => {
    const loadRecords = () => {
      try {
        const storedRecords = localStorage.getItem(STORAGE_KEY);
        if (storedRecords) {
          const parsedRecords = JSON.parse(storedRecords) as {
            id: string;
            createdAt: string;
            mealTime: string;
            name: string;
            description: string;
            imageUrls: string[];
            status: FoodRecordStatus;
            nutrition?: {
              calories: number;
              protein: number;
              fat: number;
              carbs: number;
              fiber: number;
              sugar: number;
              sodium: number;
            };
          }[];

          // 将字符串日期转换为 Date 对象
          const recordsWithDates = parsedRecords.map((record) => ({
            ...record,
            createdAt: new Date(record.createdAt),
            mealTime: new Date(record.mealTime),
          }));
          setRecords(recordsWithDates);
        }
      } catch (error) {
        console.error('Failed to load food records:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecords();
  }, []);

  // 保存记录到本地存储
  const saveRecords = useCallback((updatedRecords: FoodRecord[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecords));
    } catch (error) {
      console.error('Failed to save food records:', error);
    }
  }, []);

  // 添加新记录
  const addRecord = useCallback(
    (record: Omit<FoodRecord, 'id' | 'createdAt' | 'status'>) => {
      const newRecord: FoodRecord = {
        id: generateId(),
        createdAt: new Date(),
        status: FoodRecordStatus.CREATING,
        ...record,
      };

      const updatedRecords = [newRecord, ...records];
      setRecords(updatedRecords);
      saveRecords(updatedRecords);
      return newRecord;
    },
    [records, saveRecords]
  );

  // 更新记录
  const updateRecord = useCallback(
    (id: string, updates: Partial<FoodRecord>) => {
      const updatedRecords = records.map((record) => (record.id === id ? { ...record, ...updates } : record));
      setRecords(updatedRecords);
      saveRecords(updatedRecords);
    },
    [records, saveRecords]
  );

  // 删除记录
  const deleteRecord = useCallback(
    (id: string) => {
      const updatedRecords = records.filter((record) => record.id !== id);
      setRecords(updatedRecords);
      saveRecords(updatedRecords);
    },
    [records, saveRecords]
  );

  // 获取单个记录
  const getRecord = useCallback(
    (id: string) => {
      return records.find((record) => record.id === id);
    },
    [records]
  );

  // 获取今日记录
  const getTodayRecords = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return records.filter((record) => {
      const recordDate = new Date(record.mealTime);
      recordDate.setHours(0, 0, 0, 0);
      return recordDate.getTime() === today.getTime();
    });
  }, [records]);

  // 模拟分析食物
  const analyzeFood = useCallback(
    (id: string) => {
      // 首先将状态更新为分析中
      updateRecord(id, { status: FoodRecordStatus.ANALYZING });

      // 模拟异步分析过程
      setTimeout(() => {
        // 随机生成营养成分数据
        const nutrition = {
          calories: Math.floor(Math.random() * 800) + 200,
          protein: Math.floor(Math.random() * 30) + 5,
          fat: Math.floor(Math.random() * 20) + 5,
          carbs: Math.floor(Math.random() * 50) + 10,
          fiber: Math.floor(Math.random() * 10) + 1,
          sugar: Math.floor(Math.random() * 15) + 1,
          sodium: Math.floor(Math.random() * 500) + 100,
        };

        // 更新记录状态为完成，并添加营养成分数据
        updateRecord(id, {
          status: FoodRecordStatus.COMPLETED,
          nutrition,
        });
      }, 3000); // 3 秒后完成分析
    },
    [updateRecord]
  );

  return {
    records,
    loading,
    addRecord,
    updateRecord,
    deleteRecord,
    getRecord,
    getTodayRecords,
    analyzeFood,
  };
}
