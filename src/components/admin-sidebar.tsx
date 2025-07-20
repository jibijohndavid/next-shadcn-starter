"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AdminSidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  onMobileMenuClose?: () => void;
  isMobile?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar({
  isCollapsed = false,
  onToggle,
  onMobileMenuClose,
  isMobile = false,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked on mobile
    if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  return (
    <aside
      className={cn(
        "bg-background h-full border-r transition-all duration-300 ease-in-out",
        isMobile
          ? "w-64 shadow-2xl"
          : cn(
              "md:bg-muted/10 shadow-lg md:shadow-none",
              isCollapsed ? "w-16" : "w-64"
            )
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {(!isCollapsed || isMobile) && (
            <Link
              href="/admin/dashboard"
              className="text-xl font-bold"
              onClick={handleLinkClick}
            >
              Admin Panel
            </Link>
          )}
          {onToggle && !isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="h-8 w-8"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4 md:p-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none",
                  "min-h-[44px]", // Ensure minimum touch target size
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground",
                  isCollapsed && !isMobile ? "justify-center" : "justify-start"
                )}
                title={isCollapsed && !isMobile ? item.label : undefined}
              >
                <Icon
                  className={cn(
                    "h-4 w-4",
                    (!isCollapsed || isMobile) && "mr-3"
                  )}
                />
                {(!isCollapsed || isMobile) && (
                  <span className="truncate">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
