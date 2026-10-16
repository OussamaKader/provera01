import React from "react";
import Link from "next/link";

export default function Logo({ size = "default", withText = true, className = "" }) {
  const isLarge = size === "large";
  const isSmall = size === "small";

  const iconDimensions = isLarge ? 40 : isSmall ? 28 : 34;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 transition-opacity ${className}`}
      aria-label="Provera - Accueil"
    >
      <div className="relative flex items-center justify-center">
        <svg
          width={iconDimensions}
          height={iconDimensions}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Tech rounded container */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="10"
            fill="#F8FAFC"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          {/* Subtle gradient accent background */}
          <rect
            x="4"
            y="4"
            width="36"
            height="36"
            rx="8"
            fill="#2563EB"
            fillOpacity="0.06"
          />

          {/* Geometric Code and Network Nodes */}
          {/* Left bracket < */}
          <path
            d="M17 15L11 22L17 29"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right bracket > */}
          <path
            d="M27 15L33 22L27 29"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core connection node / slash */}
          <line
            x1="24"
            y1="14"
            x2="20"
            y2="30"
            stroke="#0F172A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Central digital pulse point */}
          <circle cx="22" cy="22" r="2.5" fill="#2563EB" />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors ${
            isLarge ? "text-2xl" : isSmall ? "text-lg" : "text-xl"
          }`}>
            PROVERA
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 -mt-1 hidden sm:block">
            Génie Informatique
          </span>
        </div>
      )}
    </Link>
  );
}

