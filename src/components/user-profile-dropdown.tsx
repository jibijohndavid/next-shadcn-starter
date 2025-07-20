import * as React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "destructive";
}

interface UserProfileDropdownProps {
  user: User;
  menuItems?: MenuItem[];
  className?: string;
  align?: "start" | "center" | "end";
  size?: "sm" | "md" | "lg";
}

const defaultMenuItems: MenuItem[] = [
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
  { label: "Log out", variant: "destructive" },
];

export function UserProfileDropdown({
  user,
  menuItems = defaultMenuItems,
  className,
  align = "end",
  size = "md",
}: UserProfileDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "relative h-11 w-11 rounded-full", // 44px minimum touch target
            className
          )}
          aria-label="User menu"
        >
          <UserAvatar user={user} size={size} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align={align} forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">{user.name}</p>
            <p className="text-muted-foreground text-xs leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <DropdownMenuItem asChild variant={item.variant}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={item.onClick} variant={item.variant}>
                {item.label}
              </DropdownMenuItem>
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
