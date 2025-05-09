
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-trend-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">頁面未找到</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          您請求的頁面不存在或已被移除。請嘗試搜尋或返回首頁。
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link to="/">返回首頁</Link>
          </Button>
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            搜尋趨勢
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
