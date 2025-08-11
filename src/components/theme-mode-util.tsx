"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const THEME_MODE = {
  DARK: "dark",
  LIGHT: "light",
};

export function ThemeMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration error

  return (
    <div className="text-foreground">
      {theme === THEME_MODE.DARK ? (
        <Moon
          size={20}
          onClick={() => {
            setTheme(THEME_MODE.LIGHT);
          }}
        />
      ) : (
        <Sun
          size={20}
          onClick={() => {
            setTheme(THEME_MODE.DARK);
          }}
        />
      )}
    </div>
  );
}
