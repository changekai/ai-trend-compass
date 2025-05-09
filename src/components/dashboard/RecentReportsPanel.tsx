
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Report {
  id: string;
  title: string;
  type: string;
  date: string;
  category: string;
}

const recentReports: Report[] = [
  {
    id: '1',
    title: '生成式AI應用趨勢分析報告',
    type: '主題趨勢報告',
    date: '2025-05-08',
    category: '科技',
  },
  {
    id: '2',
    title: '2025年第一季科技環境綜覽',
    type: 'STEEP趨勢報告',
    date: '2025-05-01',
    category: '整體環境',
  },
  {
    id: '3',
    title: '能源轉型機會與挑戰',
    type: '產業趨勢報告',
    date: '2025-04-25',
    category: '能源',
  },
  {
    id: '4',
    title: '樂齡科技最新發展與應用',
    type: '主題趨勢報告',
    date: '2025-04-18',
    category: '樂齡',
  },
];

const RecentReportsPanel = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">近期報告</CardTitle>
          <Button variant="link" size="sm" className="text-trend-blue p-0">
            查看全部 <ExternalLink className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-gray-100">
          {recentReports.map((report) => (
            <div key={report.id} className="py-3 flex items-center justify-between">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <FileText className="h-5 w-5 text-trend-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium line-clamp-1">{report.title}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">{report.type}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{report.date}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentReportsPanel;
