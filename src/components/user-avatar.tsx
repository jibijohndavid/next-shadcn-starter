import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface UserAvatarProps {
  user: User;
  size?: "sm" | "md" | "lg";
  className?: string;
  showFallback?: boolean;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

export function UserAvatar({
  user,
  size = "md",
  className,
  showFallback = true,
}: UserAvatarProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      <AvatarImage src={user.avatar} alt={user.name} />
      {showFallback && (
        <AvatarFallback className="bg-primary text-primary-foreground">
          {initials}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
