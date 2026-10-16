import React from "react";
import Link from "next/link";
import {
  Terminal,
  Database,
  Cpu,
  Coffee,
  Binary,
  Globe,
  Smartphone,
  Network,
  ArrowRight,
  Monitor,
  Users
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const iconMap = {
  Terminal,
  Database,
  Cpu,
  Coffee,
  Binary,
  Globe,
  Smartphone,
  Network
};

export default function FormationCard({ formation }) {
  const IconComponent = iconMap[formation.iconName] || Terminal;

  return (
    <Card
      as="article"
      className="flex flex-col h-full bg-white border border-slate-200/90 hover:border-blue-300 transition-all duration-300 group"
      padding="default"
    >
      {/* Header: Icon & Category */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
          <IconComponent className="w-6 h-6" />
        </div>
        <Badge variant="slate" size="sm">
          {formation.category}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
        <Link href={`/formations/${formation.slug}`} className="focus:outline-none">
          {formation.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
        {formation.shortDescription}
      </p>

      {/* Formats and level metadata */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
            {formation.level}
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <span className="flex items-center gap-1">
            <Monitor className="w-3.5 h-3.5 text-blue-500" />
            <span>En ligne</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-emerald-500" />
            <span>Présentiel</span>
          </span>
        </div>
      </div>

      {/* Action link */}
      <div>
        <Link
          href={`/formations/${formation.slug}`}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 font-medium text-sm transition-colors border border-slate-200/80 group-hover:border-blue-200"
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}

