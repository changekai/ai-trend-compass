
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const trendsData = {
  weekly: [
    { name: '生成式AI', value: 32, change: '+8', category: 'tech' },
    { name: '永續能源', value: 27, change: '+5', category: 'env' },
    { name: '供應鏈重整', value: 24, change: '+3', category: 'econ' },
    { name: '老年照護', value: 22, change: '+4', category: 'social' },
    { name: '數位治理', value: 18, change: '+2', category: 'pol' },
  ],
  monthly: [
    { name: '半導體國安', value: 56, change: '+15', category: 'tech' },
    { name: '生成式AI', value: 48, change: '+22', category: 'tech' },
    { name: '永續發展', value: 45, change: '+10', category: 'env' },
    { name: '資料主權', value: 42, change: '+7', category: 'pol' },
    { name: '人口老化', value: 38, change: '+5', category: 'social' },
  ],
};

const categoryColors = {
  tech: 'text-purple-600',
  env: 'text-green-600',
  econ: 'text-amber-600',
  social: 'text-blue-600',
  pol: 'text-red-600',
};

const TrendInsightPanel = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">熱門趨勢洞察</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">本週趨勢</TabsTrigger>
            <TabsTrigger value="monthly">本月趨勢</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="mt-0">
            <div className="space-y-3">
              {trendsData.weekly.map((trend, idx) => (
                <div key={trend.name} className="flex items-center">
                  <div className="w-6 text-center font-medium text-gray-500">
                    {idx + 1}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${categoryColors[trend.category as keyof typeof categoryColors]}`}>
                        {trend.name}
                      </span>
                      <span className="text-xs text-green-600 font-medium">{trend.change}</span>
                    </div>
                    <div className="mt-1 w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className="bg-trend-blue h-1.5 rounded-full" 
                        style={{ width: `${(trend.value / 40) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-3 text-sm font-medium">{trend.value}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-0">
            <div className="space-y-3">
              {trendsData.monthly.map((trend, idx) => (
                <div key={trend.name} className="flex items-center">
                  <div className="w-6 text-center font-medium text-gray-500">
                    {idx + 1}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${categoryColors[trend.category as keyof typeof categoryColors]}`}>
                        {trend.name}
                      </span>
                      <span className="text-xs text-green-600 font-medium">{trend.change}</span>
                    </div>
                    <div className="mt-1 w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className="bg-trend-blue h-1.5 rounded-full" 
                        style={{ width: `${(trend.value / 60) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-3 text-sm font-medium">{trend.value}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TrendInsightPanel;
