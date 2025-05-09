
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const dataSources = [
  { name: '趨勢網站', count: 8, status: 'active' },
  { name: '科技新聞', count: 12, status: 'active' },
  { name: '產學研資料', count: 5, status: 'active' },
  { name: '公協會報告', count: 3, status: 'updating' },
  { name: '論文資料', count: 7, status: 'active' },
  { name: '政府政策', count: 6, status: 'active' },
  { name: '外國資料庫', count: 4, status: 'updating' },
];

const DataSourcesPanel = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">資料來源監控</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {dataSources.map((source) => (
            <div key={source.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className={`w-2 h-2 rounded-full mr-2 ${
                    source.status === 'active' 
                      ? 'bg-green-500 animate-pulse-soft' 
                      : 'bg-amber-500 animate-pulse'
                  }`} 
                />
                <span className="text-sm font-medium">{source.name}</span>
              </div>
              <span className="text-xs text-gray-500">{source.count} 個來源</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span>總資料來源：</span>
            <span className="font-medium">45 個</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span>今日更新：</span>
            <span className="font-medium text-trend-blue">23 個</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSourcesPanel;
