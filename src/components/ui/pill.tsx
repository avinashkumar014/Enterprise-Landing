import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: ReactNode;
  className?: string;
}

/** Small glassy badge used for hero highlights and section eyebrows. */
export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground/90",
        className,
      )}
    >
      {children}
    </span>
  );
}