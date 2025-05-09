
import React, { useState, useRef, useEffect } from 'react';
import { Send, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type ChatMessage = {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
};

type SearchSource = {
  id: string;
  title: string;
  source: string;
  url: string;
  snippet: string;
};

const ConversationalSearch = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      content: '您好！我是AI趨勢小幫手，請問您想了解哪些趨勢資訊？',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeSources, setActiveSources] = useState<SearchSource[]>([]);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock search results for demonstration
  const mockSources: Record<string, SearchSource[]> = {
    '生成式AI': [
      {
        id: 's1',
        title: 'GPT-4o的多模態功能將影響哪些產業？',
        source: 'MIT Technology Review',
        url: '#',
        snippet: 'GPT-4o的發布將多模態AI推向主流，影響醫療影像診斷、建築設計和創意產業...'
      },
      {
        id: 's2',
        title: '企業導入生成式AI的5個關鍵考量',
        source: 'Harvard Business Review',
        url: '#',
        snippet: '企業在導入生成式AI時需考量數據品質、隱私保護、技術整合、員工技能與工作流程變革...'
      },
    ],
    '半導體': [
      {
        id: 's3',
        title: '台灣半導體產業面臨全球競爭新局面',
        source: '經濟部產業報告',
        url: '#',
        snippet: '面對美中科技競爭及各國積極扶植本土半導體產業，台灣半導體業應如何因應...'
      },
      {
        id: 's4',
        title: 'AI晶片需求帶動先進製程成長',
        source: 'TechCrunch',
        url: '#',
        snippet: 'NVIDIA、AMD等AI晶片需求持續成長，推動台積電等先進製程廠訂單大增...'
      },
    ],
    '碳中和': [
      {
        id: 's5',
        title: '全球碳中和政策對台灣製造業的影響',
        source: '工研院產業經濟趨勢研究',
        url: '#',
        snippet: '歐盟碳邊境調整機制(CBAM)實施後，台灣鋼鐵、塑化等產業面臨的挑戰與機會...'
      },
      {
        id: 's6',
        title: '淨零轉型金融商機崛起',
        source: '金管會研究報告',
        url: '#',
        snippet: '永續金融、碳權交易等新興金融服務蓬勃發展，台灣金融業如何把握商機...'
      },
    ],
    '樂齡科技': [
      {
        id: 's7',
        title: '高齡社會下的智慧照護創新',
        source: 'Healthcare Innovation',
        url: '#',
        snippet: 'AI結合IoT的智慧照護系統，如何提升高齡者生活品質並減輕照護負擔...'
      },
      {
        id: 's8',
        title: '樂齡科技市場趨勢分析',
        source: '工研院IEK',
        url: '#',
        snippet: '全球樂齡科技市場規模預計2030年達3500億美元，台灣發展機會在哪裡？'
      },
    ]
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsSearching(true);
    
    // Simulate AI response with delay
    setTimeout(() => {
      setIsSearching(false);
      
      // Generate sources based on keywords in the message
      let relevantSources: SearchSource[] = [];
      const keywords = ['生成式AI', '半導體', '碳中和', '樂齡科技'];
      
      for (const keyword of keywords) {
        if (inputMessage.includes(keyword) && mockSources[keyword]) {
          relevantSources = [...relevantSources, ...mockSources[keyword]];
        }
      }
      
      // If no specific keywords found, provide mixed results
      if (relevantSources.length === 0) {
        relevantSources = [
          mockSources['生成式AI'][0], 
          mockSources['半導體'][0],
          mockSources['碳中和'][0]
        ];
      }
      
      setActiveSources(relevantSources);
      
      // Generate AI response
      const aiResponse = generateAIResponse(inputMessage, relevantSources);
      const aiMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: 'ai',
        content: aiResponse,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsCollapsibleOpen(true);
    }, 2000);
  };

  const generateAIResponse = (query: string, sources: SearchSource[]): string => {
    // Simple template-based response generator
    if (query.includes('生成式AI')) {
      return `根據最新研究，生成式AI正朝多模態方向發展，特別是GPT-4o的發布標誌著一個重要里程碑。這些AI模型能同時處理文字、圖像和聲音，為企業帶來更全面的應用場景。\n\n企業在導入生成式AI時需考慮數據品質、隱私保護和技術整合等關鍵因素。我已為您整理了2份相關報告，您可以在下方參考資料區查看。`;
    } else if (query.includes('半導體')) {
      return `台灣半導體產業目前面臨全球競爭新局面，一方面是美中科技競爭加劇，另一方面是各國積極扶植本土半導體產業。\n\n同時，AI晶片需求持續增長，成為推動先進製程發展的主要動力。NVIDIA、AMD等AI晶片大廠的訂單增加，直接帶動台積電等晶圓代工廠的業績成長。\n\n詳細分析請參考下方的產業報告和新聞資訊。`;
    } else if (query.includes('碳中和')) {
      return `全球碳中和政策正對台灣製造業產生顯著影響，特別是歐盟碳邊境調整機制(CBAM)的實施，將對鋼鐵、塑化等出口歐盟的產業帶來挑戰。\n\n同時，淨零轉型也帶來金融創新機會，永續金融、碳權交易等新興服務蓬勃發展。\n\n更多詳情請查看下方的研究報告和政策分析。`;
    } else if (query.includes('樂齡科技')) {
      return `隨著台灣進入高齡社會，樂齡科技市場快速發展。AI結合IoT的智慧照護系統，正在改變傳統照護模式，提升高齡者生活品質並減輕照護負擔。\n\n根據工研院IEK的研究，全球樂齡科技市場規模預計2030年達3500億美元，台灣在此領域有獨特的發展機會。\n\n詳細市場趨勢和創新案例請參考下方資料。`;
    } else {
      return `感謝您的提問。我已為您整理了幾份可能相關的趨勢資料，包括最新的產業報告和研究分析。您可以在下方參考資料區查看詳情，或進一步告訴我您感興趣的具體領域，我可以提供更精確的資訊。`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">對話式趨勢搜尋</h1>
        <p className="text-gray-600 mt-1">
          使用自然語言與AI助手對話，探索最新趨勢資訊
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="h-[calc(100vh-220px)] flex flex-col">
            <CardContent className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-4 ${
                        message.sender === 'user'
                          ? 'bg-trend-blue text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.content}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === 'user'
                            ? 'text-blue-100'
                            : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isSearching && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-xl p-4 bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        <span className="text-gray-400 ml-2">AI小幫手思考中...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="輸入您想了解的趨勢資訊..."
                    className="min-h-[60px] resize-none"
                    disabled={isSearching}
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={isSearching || !inputMessage.trim()}
                  className="h-[60px]"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">參考資料</h3>
              {activeSources.length > 0 ? (
                <div className="space-y-4">
                  {activeSources.map((source) => (
                    <Collapsible
                      key={source.id}
                      open={isCollapsibleOpen}
                      onOpenChange={setIsCollapsibleOpen}
                    >
                      <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
                          <h4 className="font-medium text-trend-blue">{source.title}</h4>
                          <Button variant="ghost" size="sm">
                            詳情
                          </Button>
                        </CollapsibleTrigger>
                        <div className="text-sm text-gray-500 mt-1">來源：{source.source}</div>
                        <CollapsibleContent className="mt-2">
                          <p className="text-sm text-gray-700 mb-2">{source.snippet}</p>
                          <div className="flex justify-end">
                            <Button variant="outline" size="sm">
                              完整報告
                            </Button>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                  <p className="text-gray-500">請開始對話以獲取相關資訊</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">熱門話題</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => setInputMessage("生成式AI的最新發展趨勢是什麼？")}>
                  生成式AI發展
                </Button>
                <Button variant="outline" size="sm" onClick={() => setInputMessage("台灣半導體產業面臨哪些挑戰？")}>
                  半導體產業
                </Button>
                <Button variant="outline" size="sm" onClick={() => setInputMessage("碳中和政策對台灣製造業有何影響？")}>
                  碳中和轉型
                </Button>
                <Button variant="outline" size="sm" onClick={() => setInputMessage("樂齡科技市場未來三年發展方向？")}>
                  樂齡科技
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConversationalSearch;
