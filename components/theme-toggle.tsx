"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="size-11 rounded-full"
      aria-label="Toggle light and dark theme"
      onClick={() => {
        const root = document.documentElement;
        const nextDark = !root.classList.contains("dark");
        root.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
      }}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </Button>
  );
}
