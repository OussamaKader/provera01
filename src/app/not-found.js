import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 font-mono text-2xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Page introuvable
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Vous pouvez retourner à l&apos;accueil ou explorer nos formations.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" icon={Home} iconPosition="left">
            Retour à l&apos;accueil
          </Button>
          <Button href="/formations" variant="outline" icon={Search} iconPosition="left">
            Voir les formations
          </Button>
        </div>
      </div>
    </div>
  );
}

