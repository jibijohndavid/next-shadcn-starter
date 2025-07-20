"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserProfileDropdown } from "@/components/user-profile-dropdown";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AdminHeaderProps {
  user?: User;
  onSidebarToggle?: () => void;
  showSidebarToggle?: boolean;
  isMobile?: boolean;
}

export function AdminHeader({
  user = { name: "Admin User", email: "admin@example.com" },
  onSidebarToggle,
  showSidebarToggle = false,
  isMobile = false,
}: AdminHeaderProps) {
  return (
    <header className="bg-background flex h-16 items-center justify-between border-b px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {showSidebarToggle && onSidebarToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onSidebarToggle}
            className={cn(
              "h-11 w-11", // 44px minimum touch target
              isMobile ? "flex" : "hidden md:flex"
            )}
            aria-label={isMobile ? "Open navigation menu" : "Toggle sidebar"}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-foreground truncate text-base font-semibold sm:text-lg">
          Admin Dashboard
        </h1>
      </div>

      {/* Admin User Dropdown */}
      <UserProfileDropdown
        user={user}
        menuItems={[
          { label: "Admin Settings", href: "/admin/settings" },
          { label: "System Status", href: "/admin/analytics" },
          { label: "User Management", href: "/admin/users" },
          { label: "Log out", variant: "destructive" },
        ]}
      />
    </header>
  );
}
