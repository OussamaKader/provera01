import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md focus-visible:ring-blue-600 focus-visible:ring-offset-white border border-transparent",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-400 border border-slate-200/80",
    outline:
      "bg-transparent text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 border border-slate-300 focus-visible:ring-blue-600",
    blueOutline:
      "bg-transparent text-blue-600 hover:bg-blue-50 border border-blue-200 hover:border-blue-300 focus-visible:ring-blue-600",
    ghost:
      "bg-transparent text-slate-600 hover:text-blue-600 hover:bg-slate-100 focus-visible:ring-slate-400",
    white:
      "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow focus-visible:ring-blue-600",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 min-h-[36px]",
    md: "text-sm px-5 py-2.5 gap-2 min-h-[44px]",
    lg: "text-base px-6 py-3 gap-2.5 min-h-[50px] font-semibold",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target || (isExternal && !href.startsWith("mailto:") && !href.startsWith("tel:") ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

