
import React from 'react';
import TrendCard from '@/components/dashboard/TrendCard';
import DataSourcesPanel from '@/components/dashboard/DataSourcesPanel';
import SteepAnalysisCard from '@/components/dashboard/SteepAnalysisCard';
import RecentReportsPanel from '@/components/dashboard/RecentReportsPanel';
import TrendInsightPanel from '@/components/dashboard/TrendInsightPanel';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const trendData = [
  {
    category: '科技趨勢',
    title: '生成式AI朝多模態發展，聯繫影像、音訊與文字',
    description: 'GPT-4o的發布標誌著AI朝多模態方向發展加速，整合視覺、聽覺與語言模型功能。',
    source: 'MIT Technology Review',
    date: '2025-05-07',
    tags: ['AI', '多模態'],
    color: 'blue'
  },
  {
    category: '經濟趨勢',
    title: '數位經濟法規框架在全球範圍內加速形成',
    description: '各國政府正在加快數位經濟相關法規的制定與協調，涉及數據主權、跨境數據流動等關鍵議題。',
    source: 'The Economist',
    date: '2025-05-05',
    tags: ['法規', '數位經濟'],
    color: 'teal'
  },
  {
    category: '社會趨勢',
    title: '老齡化社會加速推動智慧健康照護解決方案',
    description: '面對人口老齡化挑戰，結合AI與遠端醫療的智慧健康照護解決方案正獲得前所未有的關注與投資。',
    source: 'Healthcare Innovation',
    date: '2025-05-03',
    tags: ['樂齡', '智慧醫療'],
    color: 'orange'
  }
];

const Index = () => {
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">AI趨勢觀測儀</h1>
          <p className="text-gray-600 mt-1">
            透過AI分析掌握最新趨勢，協助政策與決策制定
          </p>
        </div>
        
        <div className="flex space-x-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>2025年5月9日</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">通知</span>
            <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-red-500 text-white rounded-full">3</span>
          </Button>
        </div>
      </div>

      <div className="relative mb-8">
        <img 
          src="/lovable-uploads/3ba71ff2-6dad-4d25-a2fe-58afadb6de39.png" 
          alt="AI快研究資料流程圖" 
          className="w-full h-40 sm:h-60 object-contain rounded-lg bg-gray-50 p-2"
        />
        <div className="absolute inset-0 bg-black/5 rounded-lg"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-gradient-to-br from-trend-blue/90 to-trend-blue rounded-lg text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-1">今日資料更新</h3>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-bold">164</span>
                <span className="text-sm ml-2 opacity-80">項目</span>
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">
                +28 較昨日
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>科技新聞</span>
                <span>52 項</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>產業報告</span>
                <span>37 項</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>政策文件</span>
                <span>29 項</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-trend-teal/90 to-trend-teal rounded-lg text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-1">本週趨勢分析</h3>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-bold">84</span>
                <span className="text-sm ml-2 opacity-80">趨勢洞察</span>
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">
                +12 較上週
              </span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-1">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-1 mx-auto w-8 h-8 flex items-center justify-center text-xs">S</div>
                <span className="text-xs block mt-1">14</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-1 mx-auto w-8 h-8 flex items-center justify-center text-xs">T</div>
                <span className="text-xs block mt-1">26</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-1 mx-auto w-8 h-8 flex items-center justify-center text-xs">E</div>
                <span className="text-xs block mt-1">18</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-1 mx-auto w-8 h-8 flex items-center justify-center text-xs">E</div>
                <span className="text-xs block mt-1">11</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-1 mx-auto w-8 h-8 flex items-center justify-center text-xs">P</div>
                <span className="text-xs block mt-1">15</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-trend-orange/90 to-trend-orange rounded-lg text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-1">談參資料庫</h3>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-bold">27</span>
                <span className="text-sm ml-2 opacity-80">專案</span>
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">
                3 待處理
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>生成式AI政策</span>
                <span className="bg-white/20 px-1.5 rounded text-xs">更新</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>綠色科技投資</span>
                <span className="bg-white/20 px-1.5 rounded text-xs">更新</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>數位轉型</span>
                <span className="bg-white/20 px-1.5 rounded text-xs">更新</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-xl font-bold mt-8 mb-4">今日趨勢觀測</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {trendData.map((trend, index) => (
          <TrendCard key={index} {...trend} />
        ))}
      </div>
      
      <h2 className="text-xl font-bold mt-8 mb-4">趨勢分析儀表板</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DataSourcesPanel />
        <SteepAnalysisCard />
        <RecentReportsPanel />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <TrendInsightPanel />
        <div className="flex flex-col p-6 border rounded-lg bg-gray-50 col-span-1">
          <h3 className="text-lg font-bold mb-4">對話式趨勢搜尋</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              <p className="text-sm text-gray-600 mb-3 text-center">
                使用自然語言向AI提問，探索趨勢資訊
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="例如：近期生成式AI在產業有哪些應用？"
                  className="w-full px-4 py-2 pr-10 border rounded-lg"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-500">推薦問題：</p>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  台灣半導體產業面臨哪些挑戰？
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  全球碳中和趨勢對台灣有何影響？
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  樂齡科技未來三年發展方向？
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
