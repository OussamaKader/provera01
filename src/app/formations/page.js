import React from "react";
import Badge from "@/components/ui/Badge";
import FormationFilters from "@/components/formations/FormationFilters";
import { domainsData } from "@/data/formations";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Catalogue des Formations — Provera",
  description: "Explorez nos formations en génie informatique : Linux, Programmation C, C++, Java, SQL & PL/SQL, Développement Web, Flutter Mobile et Réseaux.",
};

export default function FormationsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge variant="blue" size="md" icon={Sparkles}>
            Catalogue Officiel
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nos formations en génie informatique
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explorez nos domaines de formation et trouvez le parcours adapté à vos objectifs. 
            Chaque programme est conçu pour allier rigueur conceptuelle et mise en pratique intensive.
          </p>
        </div>
      </section>

      {/* Interactive Filters & Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FormationFilters formations={domainsData} />
      </section>
    </div>
  );
}

