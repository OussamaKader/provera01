import React from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "blue",
  size = "md",
  className = "",
  icon: Icon
}) {
  const variantStyles = {
    blue: "bg-blue-50 text-blue-700 border-blue-200/80",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    dark: "bg-slate-900 text-slate-100 border-slate-800",
    outline: "bg-transparent text-slate-600 border-slate-300",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
    lg: "text-sm px-3.5 py-1.5 gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border tracking-wide",
        variantStyles[variant] || variantStyles.blue,
        sizeStyles[size] || sizeStyles.md,
        className
      )}
    >
      {Icon && <Icon className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} />}
      <span>{children}</span>
    </span>
  );
}

