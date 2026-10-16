import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PresentielInquiryForm from "@/components/formations/PresentielInquiryForm";
import { domainsData, contactInfo } from "@/data/formations";
import {
  Users,
  CheckCircle2,
  Terminal,
  MapPin,
  Laptop,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Formations en Présentiel — Provera",
  description: "Formations interactives en présentiel. Travaux pratiques encadrés, programmation sur machine et échanges directs en génie informatique.",
};

const presentielAdvantages = [
  {
    icon: Users,
    title: "Interaction directe et temps réel",
    description: "Posez vos questions au fil de l'explication et bénéficiez d'éclaircissements instantanés avec le formateur."
  },
  {
    icon: Laptop,
    title: "Travaux pratiques sur machine",
    description: "Mise en situation directe sur poste de travail avec résolution immédiate des anomalies de compilation et d'exécution."
  },
  {
    icon: Terminal,
    title: "Environnement d'étude immersif",
    description: "Un cadre de travail stimulant favorisant la concentration, l'échange technique et la progression rapide."
  },
  {
    icon: Sparkles,
    title: "Accompagnement méthodologique",
    description: "Apprentissage des réflexes d'ingénieur : lecture des messages d'erreur, architecture logicielle et organisation du code."
  }
];

export default function PresentielPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="blue" size="md" icon={Users}>
            Apprentissage en Salle
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Des formations en présentiel axées sur la pratique
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Progressez dans un cadre interactif grâce aux explications directes et aux travaux pratiques. 
            Développez vos réflexes informatiques avec un encadrement personnalisé sur vos machines.
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Groupes restreints pour un meilleur suivi</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Séances de travaux dirigés et pratiques (TP)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="slate" size="md">
              Avantages
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              L&apos;efficacité du présentiel pour les disciplines techniques
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              L&apos;apprentissage du génie informatique s&apos;accélère lorsqu&apos;on pratique sous le regard et les conseils d&apos;un formateur attentif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentielAdvantages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} padding="default" className="bg-white">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Domains in In-Person Format */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 space-y-3">
          <Badge variant="blue" size="md">
            Parcours Proposés
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Domaines pouvant être enseignés en présentiel
          </h2>
          <p className="text-slate-600 text-base">
            Les sessions en salle couvrent les compétences fondamentales et avancées du génie informatique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domainsData.map((d) => (
            <div
              key={d.id}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 transition-colors"
            >
              <h3 className="font-bold text-slate-900 text-base mb-1.5">
                {d.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                {d.shortDescription}
              </p>
              <Link
                href={`/formations/${d.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Détails du module</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PresentielInquiryForm />
      </section>
    </div>
  );
}

