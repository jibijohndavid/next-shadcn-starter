import {
  Bell,
  Database,
  Globe,
  Mail,
  Save,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SettingItem {
  title: string;
  description: string;
  value?: string;
  type: "input" | "button";
  buttonText?: string;
  status?: "enabled" | "disabled" | "warning";
}

interface SettingSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  settings: SettingItem[];
}

const settingSections: SettingSection[] = [
  {
    title: "General Settings",
    icon: Globe,
    settings: [
      {
        title: "Site Name",
        description: "The name of your application",
        value: "My Application",
        type: "input" as const,
      },
      {
        title: "Site Description",
        description: "Brief description of your application",
        value: "A modern web application",
        type: "input" as const,
      },
      {
        title: "Site URL",
        description: "Primary domain for your application",
        value: "https://myapp.com",
        type: "input" as const,
      },
    ],
  },
  {
    title: "Security Settings",
    icon: Shield,
    settings: [
      {
        title: "Two-Factor Authentication",
        description: "Require 2FA for admin accounts",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Session Timeout",
        description: "Auto-logout after 30 minutes of inactivity",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Password Policy",
        description: "Enforce strong password requirements",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Login Attempts",
        description: "Lock account after 5 failed attempts",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
    ],
  },
  {
    title: "Email Configuration",
    icon: Mail,
    settings: [
      {
        title: "SMTP Server",
        description: "Outgoing mail server",
        value: "smtp.example.com",
        type: "input" as const,
      },
      {
        title: "SMTP Port",
        description: "Server port (usually 587 or 465)",
        value: "587",
        type: "input" as const,
      },
      {
        title: "SMTP Username",
        description: "Authentication username",
        value: "noreply@example.com",
        type: "input" as const,
      },
      {
        title: "Test Connection",
        description: "Send a test email to verify configuration",
        type: "button" as const,
        buttonText: "Send Test Email",
      },
    ],
  },
  {
    title: "Backup & Recovery",
    icon: Database,
    settings: [
      {
        title: "Automatic Backups",
        description: "Daily database backups at 2:00 AM",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Backup Retention",
        description: "Keep backups for 30 days",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Manual Backup",
        description: "Create an immediate backup",
        type: "button" as const,
        buttonText: "Create Backup",
      },
      {
        title: "Restore Database",
        description: "Restore from a previous backup",
        type: "button" as const,
        buttonText: "Restore",
        status: "warning" as const,
      },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    settings: [
      {
        title: "Email Notifications",
        description: "Send admin alerts via email",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "System Alerts",
        description: "Critical system notifications",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "User Activity",
        description: "Notify on suspicious user activity",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
    ],
  },
  {
    title: "System Performance",
    icon: Server,
    settings: [
      {
        title: "Cache Settings",
        description: "Configure application caching",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Rate Limiting",
        description: "API request rate limits",
        type: "button" as const,
        buttonText: "Configure",
        status: "enabled" as const,
      },
      {
        title: "Database Optimization",
        description: "Optimize database performance",
        type: "button" as const,
        buttonText: "Optimize",
      },
    ],
  },
];

const getStatusColor = (status?: string) => {
  switch (status) {
    case "enabled":
      return "text-green-600";
    case "disabled":
      return "text-red-600";
    case "warning":
      return "text-orange-600";
    default:
      return "text-muted-foreground";
  }
};

const getStatusText = (status?: string) => {
  switch (status) {
    case "enabled":
      return "Enabled";
    case "disabled":
      return "Disabled";
    case "warning":
      return "Caution";
    default:
      return "";
  }
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          System Settings
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Configure system-wide settings and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid gap-6">
        {settingSections.map((section) => {
          const Icon = section.icon;

          return (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon className="h-5 w-5" />
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {section.settings.map((setting, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium">
                            {setting.title}
                          </Label>
                          <p className="text-muted-foreground text-xs">
                            {setting.description}
                          </p>
                          {setting.status && (
                            <p
                              className={`text-xs font-medium ${getStatusColor(setting.status)}`}
                            >
                              {getStatusText(setting.status)}
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          {setting.type === "input" && (
                            <Input
                              defaultValue={setting.value}
                              className="w-64"
                            />
                          )}
                          {setting.type === "button" && (
                            <Button
                              variant={
                                setting.status === "warning"
                                  ? "destructive"
                                  : "outline"
                              }
                              size="sm"
                            >
                              {setting.buttonText}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save {section.title}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>System Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Application Version</Label>
              <p className="text-muted-foreground text-sm">v1.2.3</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Database Version</Label>
              <p className="text-muted-foreground text-sm">PostgreSQL 15.4</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Server Uptime</Label>
              <p className="text-muted-foreground text-sm">15 days, 4 hours</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Last Backup</Label>
              <p className="text-muted-foreground text-sm">Today at 2:00 AM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
