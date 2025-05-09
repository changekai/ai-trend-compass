
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TrendCardProps {
  category: string;
  title: string;
  description: string;
  source: string;
  date: string;
  tags: string[];
  color?: 'blue' | 'teal' | 'orange';
  className?: string;
}

const TrendCard = ({
  category,
  title,
  description,
  source,
  date,
  tags,
  color = 'blue',
  className,
}: TrendCardProps) => {
  const colorClasses = {
    blue: 'border-l-trend-blue',
    teal: 'border-l-trend-teal',
    orange: 'border-l-trend-orange',
  };

  return (
    <Card className={cn("border-l-4 overflow-hidden", colorClasses[color], className)}>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <CardTitle className="text-base font-semibold line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-700 line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">來源：{source}</span>
          <div className="flex gap-1">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendCard;
