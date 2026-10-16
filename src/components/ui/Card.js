import React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "default",
  as: Component = "div",
  ...props
}) {
  const paddingStyles = {
    none: "p-0",
    compact: "p-4 sm:p-5",
    default: "p-6 sm:p-7",
    large: "p-8 sm:p-10",
  };

  return (
    <Component
      className={cn(
        "bg-white rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(15,23,42,0.04)]",
        hover && "transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] hover:border-slate-300 hover:-translate-y-0.5",
        paddingStyles[padding] || paddingStyles.default,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

