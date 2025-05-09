
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FileText, Download, Filter } from 'lucide-react';

const steepCategories = [
  { id: 'social', name: '社會 (Social)', color: 'bg-blue-600' },
  { id: 'tech', name: '科技 (Technological)', color: 'bg-purple-600' },
  { id: 'econ', name: '經濟 (Economic)', color: 'bg-green-600' },
  { id: 'env', name: '環境 (Environmental)', color: 'bg-amber-500' },
  { id: 'pol', name: '政治 (Political)', color: 'bg-red-500' },
];

const mockTrends = [
  {
    id: '1',
    category: 'tech',
    title: '生成式AI改變內容創作生態',
    description: '隨著GPT-4、Midjourney等大型生成模型的出現，內容創作正在經歷革命性變化，影響範圍包括媒體、設計及軟體開發等多個領域。',
    signals: ['OpenAI推出GPT-4o', 'Adobe推出AI生成工具', '自媒體創作者使用AI生成內容的比例上升'],
    impact: '高',
    timeline: '近期 (0-1年)',
    stakeholders: ['科技公司', '內容創作者', '軟體開發者'],
  },
  {
    id: '2',
    category: 'tech',
    title: '邊緣計算與5G加速物聯網部署',
    description: '邊緣計算結合5G技術正在顛覆傳統的中央化資料處理模式，使得數據可以在更接近源頭的地方進行處理，大幅降低延遲。',
    signals: ['電信商加速5G基地台布建', '邊緣AI計算晶片需求增加', 'AWS推出邊緣計算服務'],
    impact: '中',
    timeline: '中期 (1-3年)',
    stakeholders: ['電信商', '晶片製造商', '物聯網服務供應商'],
  },
  {
    id: '3',
    category: 'social',
    title: '數位原生代與多元工作型態崛起',
    description: '數位原生代進入職場，對工作型態和職場文化帶來巨大變革，推動遠端工作、彈性工時和專案型就業的普及化。',
    signals: ['遠端工作比例持續上升', 'Z世代自由工作者增加', '企業導入彈性工作政策'],
    impact: '中高',
    timeline: '近期 (0-1年)',
    stakeholders: ['人力資源部門', '年輕工作者', '工作平台服務商'],
  },
];

const SteepAnalysis = () => {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">STEEP 趨勢分析</h2>
        <div className="flex space-x-2">
          <Select defaultValue="quarter">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="檢視時段" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">本週</SelectItem>
              <SelectItem value="month">本月</SelectItem>
              <SelectItem value="quarter">本季度</SelectItem>
              <SelectItem value="year">本年度</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            篩選
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">綜合概觀</TabsTrigger>
          <TabsTrigger value="social">社會</TabsTrigger>
          <TabsTrigger value="tech">科技</TabsTrigger>
          <TabsTrigger value="econ">經濟</TabsTrigger>
          <TabsTrigger value="env">環境</TabsTrigger>
          <TabsTrigger value="pol">政治</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {steepCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${category.color}`}></div>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{Math.floor(Math.random() * 20) + 10}</span>
                    <span className="text-sm text-gray-500 mt-1">個趨勢</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">趨勢總覽</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" /> 匯出報告
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockTrends.map((trend) => (
                  <div 
                    key={trend.id} 
                    className="border-l-4 border-l-blue-600 bg-white p-4 rounded-r-md shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium">{trend.title}</h3>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                        {steepCategories.find(cat => cat.id === trend.category)?.name}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2">{trend.description}</p>
                    
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">關鍵訊號</h4>
                        <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                          {trend.signals.map((signal, idx) => (
                            <li key={idx}>{signal}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">潛在影響</h4>
                        <p className="mt-1 text-sm text-gray-700">
                          影響程度: <span className="font-medium">{trend.impact}</span><br />
                          時間範圍: <span className="font-medium">{trend.timeline}</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">相關利害關係人</h4>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {trend.stakeholders.map((stakeholder, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700"
                            >
                              {stakeholder}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-trend-blue">
                        查看詳細分析
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {steepCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${category.color}`}></div>
                  {category.name} 趨勢分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                {category.id === 'tech' ? (
                  <div className="space-y-6">
                    {mockTrends
                      .filter(trend => trend.category === 'tech')
                      .map((trend) => (
                        <div 
                          key={trend.id} 
                          className="border-l-4 border-l-purple-600 bg-white p-4 rounded-r-md shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium">{trend.title}</h3>
                            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">
                              科技趨勢
                            </span>
                          </div>
                          <p className="text-gray-700 mt-2">{trend.description}</p>
                          
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">關鍵訊號</h4>
                              <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                                {trend.signals.map((signal, idx) => (
                                  <li key={idx}>{signal}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">潛在影響</h4>
                              <p className="mt-1 text-sm text-gray-700">
                                影響程度: <span className="font-medium">{trend.impact}</span><br />
                                時間範圍: <span className="font-medium">{trend.timeline}</span>
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">相關利害關係人</h4>
                              <div className="mt-1 flex flex-wrap gap-1">
                                {trend.stakeholders.map((stakeholder, idx) => (
                                  <span 
                                    key={idx} 
                                    className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700"
                                  >
                                    {stakeholder}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-3 flex justify-end">
                            <Button variant="ghost" size="sm" className="text-trend-blue">
                              查看詳細分析
                            </Button>
                          </div>
                        </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <FileText className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-700">詳細趨勢資料載入中</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      AI 正在分析最新數據以生成趨勢報告
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SteepAnalysis;
