
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SteepCategory {
  name: string;
  value: number;
  trends: number;
  color: string;
}

const categories: SteepCategory[] = [
  { name: '社會 (Social)', value: 68, trends: 14, color: 'bg-blue-600' },
  { name: '科技 (Technological)', value: 92, trends: 26, color: 'bg-purple-600' },
  { name: '經濟 (Economic)', value: 76, trends: 18, color: 'bg-green-600' },
  { name: '環境 (Environmental)', value: 54, trends: 11, color: 'bg-amber-500' },
  { name: '政治 (Political)', value: 63, trends: 15, color: 'bg-red-500' },
];

const SteepAnalysisCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">STEEP 趨勢分析</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs text-gray-500">{category.trends} 個趨勢</span>
              </div>
              <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`absolute left-0 top-0 h-full ${category.color}`} 
                  style={{ width: `${category.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">總識別趨勢</span>
            <span className="text-lg font-semibold text-trend-blue">84</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">上週變化</span>
            <span className="text-xs text-green-600">+12 (16.7%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SteepAnalysisCard;
