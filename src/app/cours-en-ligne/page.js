import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { domainsData, contactInfo } from "@/data/formations";
import {
  Monitor,
  CheckCircle2,
  FileCode,
  BookOpen,
  FolderGit2,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  Clock,
  Sparkles,
  Share2,
  Video
} from "lucide-react";

export const metadata = {
  title: "Cours en Ligne — Provera",
  description: "Formations à distance en génie informatique. Apprenez la programmation, les bases de données et les systèmes avec un accompagnement rigoureux.",
};

const onlineBenefits = [
  {
    icon: Clock,
    title: "Apprentissage flexible et adapté",
    description: "Organisez vos séances selon votre rythme et vos contraintes personnelles ou universitaires, sans compromettre la qualité."
  },
  {
    icon: Monitor,
    title: "Séances interactives avec partage d'écran",
    description: "Des explications pas-à-pas en direct avec démonstrations de code et analyses d'erreurs en temps réel."
  },
  {
    icon: Share2,
    title: "Supports et fiches de synthèse",
    description: "Accès à des supports de cours clairs, des antisèches (cheatsheets) et des exercices d'application corrigés."
  },
  {
    icon: MessageSquare,
    title: "Assistance et suivi personnalisé",
    description: "Posez vos questions techniques et débloquez vos exercices grâce à un échange direct et réactif avec le formateur."
  }
];

const learningSupports = [
  {
    icon: BookOpen,
    title: "Supports de cours structurés",
    description: "Des synthèses théoriques claires, axées sur les concepts clés et les pièges classiques à éviter."
  },
  {
    icon: FileCode,
    title: "Exemples de code et dépôts",
    description: "Du code source propre, commenté et exécutable pour illustrer immédiatement chaque concept technique."
  },
  {
    icon: FolderGit2,
    title: "Exercices gradués et projets",
    description: "Des exercices ciblés pour valider chaque palier de compétence, suivis de mini-projets concrets."
  }
];

const onlineFaq = [
  {
    question: "Comment se déroulent les séances de cours en ligne ?",
    answer: "Les séances combinent explications conceptuelles au tableau blanc numérique, démonstration de programmation en partage d'écran et exercices guidés en direct."
  },
  {
    question: "Quel matériel ou logiciel est nécessaire pour participer ?",
    answer: "Un ordinateur connecté à Internet et un navigateur web suffisent pour démarrer. Les outils gratuits nécessaires (compilateurs, éditeurs de code, émulateurs) sont installés ensemble dès la première séance."
  },
  {
    question: "Puis-je poser des questions en dehors des séances ?",
    answer: "Oui. Les apprenants peuvent transmettre leurs questions et points de blocage par WhatsApp ou email pour recevoir des conseils et débloquer leur progression."
  },
  {
    question: "Comment convenir des créneaux horaires ?",
    answer: "Les horaires sont planifiés d'un commun accord lors de l'inscription pour convenir au rythme des étudiants et des professionnels."
  }
];

export default function CoursEnLignePage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="blue" size="md" icon={Monitor}>
            Formation à Distance
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Apprenez l&apos;informatique où que vous soyez
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Profitez de formations à distance complètes et interactives en génie informatique. 
            Développez vos compétences en programmation, systèmes et réseaux avec des explications claires et un suivi individuel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              href={contactInfo.whatsappUrl}
              variant="primary"
              size="lg"
              icon={MessageSquare}
              iconPosition="left"
            >
              Demander des informations sur les cours en ligne
            </Button>
            <Button
              href="/formations"
              variant="outline"
              size="lg"
            >
              Voir les programmes disponibles
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="slate" size="md">
              Avantages
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pourquoi choisir l&apos;apprentissage en ligne avec Provera ?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Une formule conçue pour maximiser votre temps tout en conservant une interaction pédagogique de premier plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineBenefits.map((item, idx) => {
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

      {/* Pedagogical Methodology and Supports */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <Badge variant="blue" size="md">
            Méthodes et Outils
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Des supports pédagogiques concrets
          </h2>
          <p className="text-slate-600 text-base">
            L&apos;apprentissage en ligne chez Provera repose sur des ressources tangibles adaptées à chaque session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningSupports.map((sup, idx) => {
            const Icon = sup.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {sup.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {sup.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Available Domains for Online Training */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
              Catalogue en Ligne
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Domaines disponibles à distance
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              L&apos;ensemble de nos 8 parcours de formation peut être suivi intégralement à distance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domainsData.map((d) => (
              <Link
                key={d.id}
                href={`/formations/${d.slug}`}
                className="bg-white/10 hover:bg-white/15 p-4 rounded-xl border border-white/10 transition-colors block group"
              >
                <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors block">
                  {d.title}
                </span>
                <span className="text-xs text-slate-400 mt-1 inline-flex items-center gap-1">
                  <span>Programme complet</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Online FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <Badge variant="slate" size="md">
            FAQ Dédiée
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Questions sur les cours à distance
          </h2>
        </div>
        <Accordion items={onlineFaq} />
      </section>

      {/* Final Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-8 sm:p-10 space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900">
            Commencez votre formation à distance
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            Contactez-nous pour convenir d&apos;un calendrier et démarrer votre premier module.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={contactInfo.whatsappUrl}
              variant="primary"
              size="md"
              icon={MessageSquare}
              iconPosition="left"
            >
              Échanger sur WhatsApp
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
            >
              Formulaire de contact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

