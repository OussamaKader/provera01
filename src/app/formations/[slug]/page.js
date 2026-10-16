import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  domainsData,
  contactInfo
} from "@/data/formations";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Calendar,
  Layers,
  Monitor,
  Users,
  Target,
  Wrench,
  MessageSquare,
  Mail,
  FolderGit2,
  Terminal,
  Database,
  Cpu,
  Coffee,
  Binary,
  Globe,
  Smartphone,
  Network
} from "lucide-react";

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

export async function generateStaticParams() {
  return domainsData.map((formation) => ({
    slug: formation.slug,
  }));
}

export async function generateMetadata({ params }) {
  const formation = domainsData.find((f) => f.slug === params.slug);
  if (!formation) {
    return {
      title: "Formation introuvable — Provera",
    };
  }
  return {
    title: `${formation.title} — Formation Provera`,
    description: formation.shortDescription,
  };
}

export default function FormationDetailPage({ params }) {
  const formation = domainsData.find((f) => f.slug === params.slug);

  if (!formation) {
    notFound();
  }

  const IconComp = iconMap[formation.iconName] || Terminal;
  const whatsappInquiryUrl = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(
    `Bonjour Provera, je souhaite obtenir des informations sur la formation : ${formation.title}.`
  )}`;
  const emailInquiryUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    `Demande d'informations — Formation ${formation.title}`
  )}`;

  return (
    <div className="py-10 sm:py-16 space-y-12">
      {/* Breadcrumb & Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/formations"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à toutes les formations</span>
        </Link>
      </div>

      {/* Hero of the Formation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue" size="md">
                {formation.category}
              </Badge>
              <Badge variant="slate" size="md">
                {formation.level}
              </Badge>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 flex-shrink-0">
                <IconComp className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {formation.title}
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  Génie Informatique & Technologies Numériques
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {formation.fullDescription}
            </p>

            {/* Formats Info */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center gap-6 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Formats disponibles :</span>
              <span className="inline-flex items-center gap-1.5">
                <Monitor className="w-4 h-4 text-blue-600" />
                <span>En ligne (à distance)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Présentiel (en salle)</span>
              </span>
            </div>
          </div>

          {/* Quick CTA Box */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                Intéressé par ce parcours ?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contactez Provera pour échanger sur vos objectifs, vérifier les créneaux et obtenir le plan détaillé adapté à votre situation.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                href={whatsappInquiryUrl}
                variant="primary"
                size="md"
                className="w-full"
                icon={MessageSquare}
                iconPosition="left"
              >
                Demander des informations via WhatsApp
              </Button>
              <Button
                href={emailInquiryUrl}
                variant="outline"
                size="md"
                className="w-full"
                icon={Mail}
                iconPosition="left"
              >
                Envoyer un email
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                size="sm"
                className="w-full text-slate-500"
              >
                Accéder au formulaire de contact
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center">
              Réponse rapide assurée par le responsable pédagogique
            </div>
          </div>
        </div>
      </section>

      {/* Objectives & Skills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pedagogical Objectives */}
          <Card className="space-y-4" padding="default">
            <div className="flex items-center gap-2.5 text-blue-600">
              <Target className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900">
                Objectifs pédagogiques
              </h2>
            </div>
            <ul className="space-y-3">
              {formation.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Acquired Skills */}
          <Card className="space-y-4" padding="default">
            <div className="flex items-center gap-2.5 text-blue-600">
              <Wrench className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900">
                Compétences abordées
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {formation.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Prerequisites */}
            <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Prérequis recommandés
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {formation.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Program Curriculum Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 space-y-2">
          <Badge variant="blue" size="md">
            Syllabus
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Programme détaillé par modules
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Une progression méthodique articulée autour de notions théoriques et d&apos;applications concrètes.
          </p>
        </div>

        <div className="space-y-4">
          {formation.program.map((mod) => (
            <div
              key={mod.moduleNumber}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-bold flex items-center justify-center">
                    M{mod.moduleNumber}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {mod.title}
                  </h3>
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                {mod.topics.map((topic, tIdx) => (
                  <li
                    key={tIdx}
                    className="flex items-start gap-2 text-sm text-slate-600 leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Projects section */}
      {formation.projects && formation.projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-blue-600 mb-4">
              <FolderGit2 className="w-5 h-5" />
              <h3 className="text-lg font-bold text-slate-900">
                Exemples de projets et travaux pratiques
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {formation.projects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white p-4 rounded-xl border border-slate-200/80 text-sm font-medium text-slate-700 shadow-2xs"
                >
                  {proj}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Prêt à débuter la formation {formation.title} ?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Contactez Provera pour poser vos questions, vérifier les formats disponibles et recevoir les informations complètes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href={whatsappInquiryUrl}
              variant="primary"
              size="md"
              icon={MessageSquare}
              iconPosition="left"
            >
              Demander des informations
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
            >
              Contacter Provera
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

