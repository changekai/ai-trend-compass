
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  TrendingUp, 
  FileText, 
  MessageSquare, 
  Search,
  BarChart3,
  BookOpen,
  Lightbulb,
  Users,
  Calendar,
  Mail,
  Globe,
  Target,
  Zap,
  Award,
  GraduationCap,
  Briefcase,
  Building2
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  status: 'active' | 'development' | 'planned';
  features: string[];
  output: string;
  onExplore: () => void;
}

const FeatureCard = ({ title, description, category, icon, status, features, output, onExplore }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    development: 'bg-yellow-100 text-yellow-800',
    planned: 'bg-blue-100 text-blue-800'
  };

  const statusText = {
    active: '已上線',
    development: '開發中',
    planned: '規劃中'
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg border-l-4 border-l-trend-blue">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-trend-blue/10 rounded-lg">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <Badge className={`mt-1 ${statusColors[status]}`}>
                {statusText[status]}
              </Badge>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">預期產出：</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{output}</p>
          </div>
          
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-trend-blue p-0 h-auto"
            >
              {isExpanded ? '收起功能詳情' : '查看功能詳情'}
            </Button>
            
            {isExpanded && (
              <div className="mt-2 space-y-2">
                <p className="text-sm font-medium text-gray-700">核心功能：</p>
                <ul className="space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-trend-blue rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <Button 
            onClick={onExplore}
            className="w-full mt-4 bg-trend-blue hover:bg-blue-700"
            disabled={status === 'planned'}
          >
            {status === 'planned' ? '敬請期待' : '體驗功能'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PlatformFeatures = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部功能', count: 10 },
    { id: 'automation', name: '自動化報告', count: 2 },
    { id: 'analysis', name: '深度分析', count: 4 },
    { id: 'specialized', name: '精煉應用', count: 4 }
  ];

  const features = [
    {
      id: 1,
      title: '政策盤點週報',
      description: '每週自動生成政策相關資訊摘要，協助技術司同仁掌握最新政策動態',
      category: 'automation',
      icon: <FileText className="h-5 w-5 text-trend-blue" />,
      status: 'development' as const,
      output: '每週一份，持續約三十週，提供技術司內部同仁參考，協助資料蒐集與研究',
      features: [
        '自動化資料蒐集模組',
        'AI內容處理與分析模組',
        '報告自動生成引擎',
        '排程與自動寄送模組',
        '任務管理與追蹤'
      ]
    },
    {
      id: 2,
      title: '每日電子報',
      description: '每日自動蒐集並推播AI相關最新資訊與趨勢',
      category: 'automation',
      icon: <Mail className="h-5 w-5 text-trend-blue" />,
      status: 'development' as const,
      output: '每日自動生成並發送，提供即時AI相關資訊',
      features: [
        '廣泛資訊自動蒐集模組',
        'AI資訊處理與篩選模組',
        '客製化推播設定',
        '電子報自動生成引擎',
        '排程與自動寄送模組'
      ]
    },
    {
      id: 3,
      title: '整體環境趨勢報告',
      description: '基於STEEP框架進行多維度環境分析，識別趨勢與機會',
      category: 'analysis',
      icon: <Globe className="h-5 w-5 text-trend-blue" />,
      status: 'active' as const,
      output: '基於STEEP框架（社會、科技、經濟、環境、政治），由AI處理層根據UI設定自動生成',
      features: [
        'STEEP多維度資料蒐集模組',
        'AI STEEP分析引擎',
        '使用者互動介面(UI)',
        'STEEP報告生成引擎',
        '視覺化呈現模組'
      ]
    },
    {
      id: 4,
      title: '主題型/產業趨勢報告',
      description: '針對特定領域或產業進行深度趨勢分析',
      category: 'analysis',
      icon: <TrendingUp className="h-5 w-5 text-trend-blue" />,
      status: 'development' as const,
      output: '針對特定領域或主題（如生成式AI、樂齡科技、能源AI應用等）自動生成分析報告',
      features: [
        '主題/產業深度資料蒐集模組',
        '進階AI分析引擎',
        '使用者互動介面(UI)',
        '主題/產業報告生成引擎'
      ]
    },
    {
      id: 5,
      title: '談參資料',
      description: '支援決策者快速準備會議討論資料，類似Repository功能',
      category: 'analysis',
      icon: <MessageSquare className="h-5 w-5 text-trend-blue" />,
      status: 'active' as const,
      output: '支援決策者快速準備會議或討論，類似Repository功能，透過AI快速產出',
      features: [
        '整合知識庫存取模組',
        '自然語言查詢(NLQ)介面',
        'AI快速應答與摘要模組',
        '輸出格式化模組'
      ]
    },
    {
      id: 6,
      title: '臨時索資處理',
      description: '快速回應緊急資料需求，提供即時資訊檢索服務',
      category: 'analysis',
      icon: <Zap className="h-5 w-5 text-trend-blue" />,
      status: 'active' as const,
      output: '快速回應臨時性的資料需求，例如「部長三分鐘內需要某個資料」',
      features: [
        '高效能資訊檢索引擎',
        '優化的NLQ與即時AI處理',
        '預處理與快取機制',
        '簡潔結果呈現與快速傳遞介面'
      ]
    },
    {
      id: 7,
      title: '一頁式報告/簡報/個案',
      description: '生成高度濃縮的一頁式分析報告，符合高層閱讀習慣',
      category: 'specialized',
      icon: <BarChart3 className="h-5 w-5 text-trend-blue" />,
      status: 'development' as const,
      output: '內容高度濃縮，符合高層閱讀習慣（一張圖、一頁案子），是Prompt工程最佳化的重要目標',
      features: [
        '進階AI摘要與提煉引擎',
        '優化的Prompt工程介面/核心',
        '視覺化元素生成/整合',
        '一頁式模板引擎'
      ]
    },
    {
      id: 8,
      title: '用於人才培訓所需的資料',
      description: '結合AI排序，產出可輔助人才培訓的精選學習資料',
      category: 'specialized',
      icon: <GraduationCap className="h-5 w-5 text-trend-blue" />,
      status: 'planned' as const,
      output: '結合AI Ranking，產出可輔助人才培訓的資料',
      features: [
        'AI內容策展與排序模組',
        '學習材料初步生成',
        '學習路徑建議'
      ]
    },
    {
      id: 9,
      title: 'AI與GAI的創新應用個案',
      description: '蒐集並分析全球AI創新應用案例，具商業化潛力',
      category: 'specialized',
      icon: <Lightbulb className="h-5 w-5 text-trend-blue" />,
      status: 'planned' as const,
      output: '未來可能產出，甚至可商業化',
      features: [
        '全球AI/GAI應用案例蒐集與資料庫',
        'AI輔助案例分析與撰寫模組',
        '案例資料庫管理與檢索'
      ]
    },
    {
      id: 10,
      title: 'AI新創識別與分析結果',
      description: '識別並分析最具潛力的AI新創公司，提供投資參考',
      category: 'specialized',
      icon: <Building2 className="h-5 w-5 text-trend-blue" />,
      status: 'planned' as const,
      output: '例如分析識別出「一百個最值得我們去攻的AI新創」',
      features: [
        '全球AI新創資料蒐集模組',
        'AI新創評估與排序模型',
        '多維度篩選與比較功能',
        '新創分析報告生成'
      ]
    }
  ];

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  const handleExplore = (featureId: number) => {
    // 根據功能ID導向對應頁面
    switch(featureId) {
      case 3:
        window.location.href = '/steep';
        break;
      case 5:
      case 6:
        window.location.href = '/search';
        break;
      default:
        // 其他功能暫時顯示提示
        alert('此功能正在開發中，敬請期待！');
    }
  };

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI快研究平台功能</h1>
        <p className="text-gray-600">
          一個清晰展示平台核心功能的互動式概覽，涵蓋自動化報告、深度分析與精煉應用三大類別
        </p>
      </div>

      {/* 功能統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-trend-blue/90 to-trend-blue text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">自動化報告</p>
                <p className="text-2xl font-bold">2 項功能</p>
              </div>
              <Clock className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-trend-teal/90 to-trend-teal text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100">深度分析</p>
                <p className="text-2xl font-bold">4 項功能</p>
              </div>
              <Search className="h-8 w-8 text-teal-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-trend-orange/90 to-trend-orange text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">精煉應用</p>
                <p className="text-2xl font-bold">4 項功能</p>
              </div>
              <Target className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 分類篩選器 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "bg-trend-blue hover:bg-blue-700" : ""}
          >
            {category.name}
            <Badge variant="secondary" className="ml-2">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* 功能卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            category={feature.category}
            icon={feature.icon}
            status={feature.status}
            features={feature.features}
            output={feature.output}
            onExplore={() => handleExplore(feature.id)}
          />
        ))}
      </div>

      {/* 底部說明 */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">功能分類說明</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-trend-blue mb-2">一、定期自動化報告與資訊推播</h4>
            <p className="text-sm text-gray-600">
              這類產出強調時效性、規律性，並需高度自動化。包含政策盤點週報和每日電子報等功能。
            </p>
          </div>
          <div>
            <h4 className="font-medium text-trend-teal mb-2">二、深度分析與動態回應報告</h4>
            <p className="text-sm text-gray-600">
              這類產出需要更強的AI分析能力，並能依據使用者需求或特定事件觸發。包含STEEP分析、談參資料等。
            </p>
          </div>
          <div>
            <h4 className="font-medium text-trend-orange mb-2">三、精煉型與特定應用型產出</h4>
            <p className="text-sm text-gray-600">
              這類產出強調資訊的精煉度、特定格式要求，或針對特定應用場景。包含一頁式報告、培訓資料等。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatures;
