
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, FileText, Home, 
  Layers, MessageSquare, Search, 
  Settings, ChevronRight, ChevronLeft 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: '首頁', icon: Home, path: '/' },
  { name: 'STEEP趨勢', icon: BarChart, path: '/steep' },
  { name: '主題趨勢', icon: Layers, path: '/topics' },
  { name: '產業報告', icon: FileText, path: '/industry' },
  { name: '對話式搜尋', icon: MessageSquare, path: '/chat' },
  { name: '資料來源', icon: Search, path: '/sources' },
  { name: '設定', icon: Settings, path: '/settings' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen flex-shrink-0 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <span className="font-medium text-trend-blue">AI趨勢觀測儀</span>
          )}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className={cn("ml-auto", collapsed && "mx-auto")}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
        
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100",
                    collapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", collapsed ? "mx-0" : "mr-3")} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          {!collapsed && (
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-trend-blue mb-2">每日趨勢報告</p>
              <Button size="sm" className="w-full bg-trend-blue hover:bg-blue-700">
                查看最新報告
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
