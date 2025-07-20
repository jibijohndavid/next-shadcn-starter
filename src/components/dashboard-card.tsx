import * as React from "react";

import { TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function DashboardCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
  className,
}: DashboardCardProps) {
  const TrendIcon = trend?.isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className={cn("transition-shadow hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">
          {title}
        </CardTitle>
        {Icon && <Icon className="text-muted-foreground h-4 w-4" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="text-muted-foreground flex items-center space-x-1 text-xs">
            {trend && (
              <TrendIcon
                className={`h-3 w-3 ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              />
            )}
            <span>{description}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
