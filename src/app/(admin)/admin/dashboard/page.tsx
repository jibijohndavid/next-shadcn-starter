import Link from "next/link";

import {
  Activity,
  BarChart3,
  Clock,
  DollarSign,
  FileText,
  Server,
  Settings,
  Users,
} from "lucide-react";

import { DashboardCard } from "@/components/dashboard-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardMetric {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const metrics: DashboardMetric[] = [
  {
    title: "Total Users",
    value: "1,234",
    description: "+12% from last month",
    icon: Users,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Active Sessions",
    value: "456",
    description: "+8% from yesterday",
    icon: Activity,
    trend: { value: 8, isPositive: true },
  },
  {
    title: "System Health",
    value: "98.5%",
    description: "All systems operational",
    icon: Server,
  },
  {
    title: "Revenue",
    value: "$12,345",
    description: "+15% from last month",
    icon: DollarSign,
    trend: { value: 15, isPositive: true },
  },
];

const quickActions = [
  {
    title: "Manage Users",
    href: "/admin/users",
    icon: Users,
    description: "View and manage user accounts",
  },
  {
    title: "View Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    description: "Analyze system performance",
  },
  {
    title: "System Settings",
    href: "/admin/settings",
    icon: Settings,
    description: "Configure system preferences",
  },
  {
    title: "Generate Report",
    href: "#",
    icon: FileText,
    description: "Create system reports",
  },
];

const recentActivities = [
  {
    title: "New user registered",
    time: "2 minutes ago",
    type: "user",
    color: "bg-blue-500",
  },
  {
    title: "System backup completed",
    time: "1 hour ago",
    type: "system",
    color: "bg-green-500",
  },
  {
    title: "Server maintenance scheduled",
    time: "3 hours ago",
    type: "maintenance",
    color: "bg-orange-500",
  },
  {
    title: "Security scan completed",
    time: "5 hours ago",
    type: "security",
    color: "bg-purple-500",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Overview of system metrics and administrative tools
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {metrics.map((metric) => (
          <DashboardCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            trend={metric.trend}
            icon={metric.icon}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`h-2 w-2 rounded-full ${activity.color}`} />
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="truncate text-sm font-medium">
                      {activity.title}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="h-auto justify-start p-4 text-left"
                    asChild
                  >
                    <Link href={action.href}>
                      <div className="flex items-center space-x-3">
                        <Icon className="text-muted-foreground h-5 w-5" />
                        <div className="space-y-1">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-muted-foreground text-xs">
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
