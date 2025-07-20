import {
  Activity,
  BarChart3,
  Clock,
  Download,
  Eye,
  Globe,
  MousePointer,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalyticsMetric {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

interface PageData {
  path: string;
  title: string;
  views: number;
  uniqueViews: number;
  bounceRate: number;
}

interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
  color: string;
}

const analyticsMetrics: AnalyticsMetric[] = [
  {
    title: "Total Page Views",
    value: "45,231",
    description: "+20.1% from last month",
    icon: Eye,
    trend: { value: 20.1, isPositive: true },
  },
  {
    title: "Unique Visitors",
    value: "12,234",
    description: "+15.3% from last month",
    icon: Users,
    trend: { value: 15.3, isPositive: true },
  },
  {
    title: "Bounce Rate",
    value: "24.5%",
    description: "-2.1% from last month",
    icon: MousePointer,
    trend: { value: 2.1, isPositive: true },
  },
  {
    title: "Avg. Session Duration",
    value: "3m 42s",
    description: "+8.2% from last month",
    icon: Clock,
    trend: { value: 8.2, isPositive: true },
  },
  {
    title: "Active Sessions",
    value: "1,847",
    description: "Currently online",
    icon: Activity,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    description: "+0.5% from last month",
    icon: TrendingUp,
    trend: { value: 0.5, isPositive: true },
  },
];

const topPages: PageData[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    views: 8234,
    uniqueViews: 6543,
    bounceRate: 15.2,
  },
  {
    path: "/profile",
    title: "User Profile",
    views: 5432,
    uniqueViews: 4321,
    bounceRate: 22.1,
  },
  {
    path: "/settings",
    title: "Settings",
    views: 3210,
    uniqueViews: 2876,
    bounceRate: 18.7,
  },
  {
    path: "/admin/users",
    title: "User Management",
    views: 2987,
    uniqueViews: 2543,
    bounceRate: 12.3,
  },
  {
    path: "/admin/analytics",
    title: "Analytics",
    views: 2156,
    uniqueViews: 1987,
    bounceRate: 8.9,
  },
];

const trafficSources: TrafficSource[] = [
  { source: "Direct", visitors: 4521, percentage: 37, color: "bg-blue-500" },
  { source: "Search", visitors: 3210, percentage: 26, color: "bg-green-500" },
  { source: "Social", visitors: 2345, percentage: 19, color: "bg-purple-500" },
  {
    source: "Referral",
    visitors: 1876,
    percentage: 15,
    color: "bg-orange-500",
  },
  { source: "Email", visitors: 432, percentage: 3, color: "bg-pink-500" },
];

const recentActivity = [
  {
    action: "New user registration",
    user: "john@example.com",
    time: "2 minutes ago",
    type: "user",
  },
  {
    action: "Page view spike detected",
    user: "/dashboard",
    time: "5 minutes ago",
    type: "analytics",
  },
  {
    action: "High bounce rate alert",
    user: "/contact",
    time: "12 minutes ago",
    type: "warning",
  },
  {
    action: "New referral source",
    user: "example.com",
    time: "1 hour ago",
    type: "traffic",
  },
  {
    action: "Goal conversion",
    user: "Newsletter signup",
    time: "2 hours ago",
    type: "conversion",
  },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Comprehensive analytics and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {analyticsMetrics.map((metric) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend?.isPositive
            ? TrendingUp
            : TrendingDown;

          return (
            <Card
              key={metric.title}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-muted-foreground text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <Icon className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-muted-foreground flex items-center space-x-1 text-xs">
                  {metric.trend && (
                    <TrendIcon
                      className={`h-3 w-3 ${
                        metric.trend.isPositive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                  )}
                  <span>{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Data */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Top Performing Pages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.path} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{page.title}</p>
                      <p className="text-muted-foreground text-xs">
                        {page.path}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {page.views.toLocaleString()} views
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {page.uniqueViews.toLocaleString()} unique
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-muted-foreground">Bounce rate:</span>
                    <span
                      className={
                        page.bounceRate < 20
                          ? "text-green-600"
                          : page.bounceRate < 30
                            ? "text-orange-600"
                            : "text-red-600"
                      }
                    >
                      {page.bounceRate}%
                    </span>
                  </div>
                  {index < topPages.length - 1 && (
                    <div className="border-b pt-2" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Traffic Sources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`h-3 w-3 rounded-full ${source.color}`} />
                      <span className="text-sm font-medium">
                        {source.source}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {source.visitors.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {source.percentage}%
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted h-2 rounded-full">
                    <div
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`h-2 w-2 rounded-full ${
                    activity.type === "user"
                      ? "bg-blue-500"
                      : activity.type === "warning"
                        ? "bg-orange-500"
                        : activity.type === "conversion"
                          ? "bg-green-500"
                          : "bg-purple-500"
                  }`}
                />
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <div className="text-muted-foreground flex items-center space-x-2 text-xs">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
