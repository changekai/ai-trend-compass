
import React from 'react';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-trend-dark">
            <span className="text-trend-blue">AI</span>-快研究
          </h1>
          <div className="hidden md:flex items-center px-4 py-1.5 bg-gray-100 rounded-full">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="搜尋趨勢、主題或報告..."
              className="bg-transparent border-none outline-none text-sm w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="ml-2 gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">登入</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
