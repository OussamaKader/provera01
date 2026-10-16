import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { contactInfo } from "@/data/formations";
import {
  Sparkles,
  BookOpen,
  Target,
  ShieldCheck,
  Terminal,
  Code2,
  Cpu,
  Layers,
  GraduationCap,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export const metadata = {
  title: "À Propos de Provera — Notre Mission & Fondateur",
  description: "Découvrez Provera et son fondateur Oussama Mohamed Lemine, étudiant en master ILCS. Une démarche axée sur l'excellence et la pédagogie pratique en informatique.",
};

const pedagogicalValues = [
  {
    title: "Compréhension profonde",
    description: "Plutôt que d'apprendre des commandes par cœur, nous privilégions la compréhension des mécanismes sous-jacents : mémoire, protocoles, cycles d'exécution.",
    icon: Target
  },
  {
    title: "Apprentissage par la pratique",
    description: "Chaque séance est immédiatement appliquée à des cas réels, des travaux dirigés et des mini-projets pour ancrer les compétences.",
    icon: Terminal
  },
  {
    title: "Accompagnement continu",
    description: "Un encadrement bienveillant qui écoute les besoins individuels, répond aux interrogations et développe l'autonomie technique.",
    icon: ShieldCheck
  }
];

export default function AProposPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="blue" size="md" icon={Sparkles}>
            Identité & Vision
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            À propos de Provera
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Provera est une initiative dédiée à l&apos;apprentissage du génie informatique et au développement des compétences techniques des étudiants, débutants et passionnés de technologie.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50/60 to-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Notre Mission
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              « Rendre l&apos;apprentissage de l&apos;informatique plus accessible grâce à des explications claires, une approche pratique et des parcours adaptés aux objectifs des apprenants. »
            </blockquote>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              Dans un secteur en constante évolution, maîtriser les bases fondamentales (systèmes, programmation procédurale et orientée objet, données, réseaux) permet d&apos;aborder n&apos;importe quelle nouvelle technologie avec confiance et rigueur.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <Badge variant="slate" size="md">
            Initiative & Fondateur
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Le fondateur de Provera
          </h2>
          <p className="text-slate-600 text-base">
            Une initiative portée par la passion de l&apos;ingénierie logicielle et du partage des connaissances.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Abstract Graphic Composition / Avatar */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-700 p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[22px] flex flex-col items-center justify-center text-center p-6 text-white relative overflow-hidden">
                  {/* Subtle code pattern */}
                  <div className="absolute inset-0 opacity-10 tech-grid-pattern pointer-events-none" />
                  
                  {/* Monogram */}
                  <span className="font-mono text-4xl sm:text-5xl font-black text-blue-400 tracking-wider">
                    OML
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-medium">
                    Master ILCS
                  </span>

                  {/* Tech accents */}
                  <div className="mt-4 flex items-center gap-2 text-[10px] text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Génie Informatique</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-3 -right-3 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-md text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Étudiant Master</span>
              </div>
            </div>
          </div>

          {/* Founder Bio Details */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                Fondateur & Formateur
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Oussama Mohamed Lemine
              </h3>
              <p className="text-slate-500 font-medium text-sm mt-0.5">
                Étudiant en master ILCS (Ingénierie des Logiciels et des Connaissances / Systèmes)
              </p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Passionné par les technologies numériques et l&apos;architecture informatique, Oussama Mohamed Lemine a créé Provera avec la conviction qu&apos;une pédagogie claire, progressive et concrète permet à chaque apprenant de surmonter la complexité apparente des concepts informatiques.
            </p>

            {/* Professional Interests */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Domaines d&apos;intérêt et d&apos;expertise :
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Génie logiciel",
                  "Programmation (C, C++, Java)",
                  "Développement Web moderne",
                  "Développement mobile (Flutter)",
                  "Bases de données relationnelles & SQL",
                  "Réseaux informatiques & Protocoles",
                  "Systèmes d'exploitation & Linux"
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct contact link */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={MessageSquare}
                iconPosition="left"
              >
                Contacter le fondateur
              </Button>
              <Button
                href="/formations"
                variant="outline"
                size="md"
              >
                Explorer le catalogue
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="blue" size="md">
              Engagements Pédagogiques
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Nos principes d&apos;enseignement
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              L&apos;apprentissage de la technologie doit être rigoureux, stimulant et valorisant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pedagogicalValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Card key={idx} padding="default" className="bg-white">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

