import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Wrench,
  FolderGit2,
  Layers,
  Sparkles,
  Monitor,
  Users,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Terminal,
  Database,
  Cpu,
  Coffee,
  Binary,
  Globe,
  Smartphone,
  Network
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import {
  domainsData,
  whyChooseProvera,
  howItWorksSteps,
  projectExamples,
  faqData,
  contactInfo
} from "@/data/formations";

// Dynamically import 3D Canvas with ssr: false for seamless client rendering
const TechHeroCanvas = dynamic(
  () => import("@/components/3d/TechHeroCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[360px] sm:h-[440px] flex items-center justify-center">
        <div className="w-44 h-44 rounded-full border border-blue-200/50 bg-blue-50/20 animate-pulse" />
      </div>
    ),
  }
);

const iconMap = {
  Terminal,
  Database,
  Cpu,
  Coffee,
  Binary,
  Globe,
  Smartphone,
  Network,
  BookOpen,
  Code2,
  Wrench,
  FolderGit2,
  Layers,
  Sparkles
};

export default function HomePage() {
  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-16">
      {/* =========================================================================
          SECTION 1 : HERO SECTION
      ========================================================================== */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-100 tech-grid-pattern">
        {/* Soft background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex justify-center lg:justify-start">
                <Badge variant="blue" size="md" icon={Sparkles}>
                  Votre avenir commence avec les bonnes compétences
                </Badge>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Apprenez l&apos;informatique.{" "}
                <span className="text-blue-600 block sm:inline">
                  Construisez votre avenir numérique.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Découvrez des formations pratiques en génie informatique, de la programmation aux réseaux, et développez les compétences nécessaires pour réaliser vos projets.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Button
                  href="/formations"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Découvrir nos formations
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Nous contacter
                </Button>
              </div>

              {/* Trust & Focus Features */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">8 Domaines Clés</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">En Ligne & Présentiel</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Approche Pratique</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Tech Canvas */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <TechHeroCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 : DOMAINES DE FORMATION
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Badge variant="blue" size="md">
            Catalogue Pédagogique
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explorez les domaines de l&apos;informatique
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Des bases de la programmation aux technologies modernes du développement logiciel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainsData.map((domain) => {
            const IconComp = iconMap[domain.iconName] || Terminal;
            return (
              <Card
                key={domain.id}
                className="flex flex-col h-full bg-white border border-slate-200/90 hover:border-blue-400 group transition-all duration-300"
                padding="default"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 flex-shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {domain.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {domain.shortDescription}
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/formations/${domain.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 focus:outline-none"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/formations" variant="secondary" size="md" icon={ArrowRight}>
            Consulter tout le catalogue interactif
          </Button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 : POURQUOI CHOISIR PROVERA ?
      ========================================================================== */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="slate" size="md">
              Notre Méthodologie
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Une approche pratique de l&apos;apprentissage
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Une formation réussie allie rigueur conceptuelle, mise en application immédiate et progression personnalisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseProvera.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || BookOpen;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 : COMMENT ÇA MARCHE ?
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge variant="blue" size="md">
            Parcours Simple
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comment ça marche ?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Un processus clair en 3 étapes pour commencer à développer vos compétences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-blue-50 text-blue-600 font-mono text-xs font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-blue-600">
                <span>Étape progressive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 : FORMATION EN LIGNE ET EN PRÉSENTIEL
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="slate" size="md">
            Flexibilité des Formats
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Formation en ligne et en présentiel
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choisissez la modalité d&apos;apprentissage qui s&apos;intègre le mieux à votre emploi du temps et vos préférences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Online */}
          <div className="bg-gradient-to-br from-white to-blue-50/40 rounded-2xl p-8 sm:p-10 border border-blue-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <Monitor className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Formation en ligne
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Apprenez à distance grâce à des séances et des supports pédagogiques adaptés à votre formation. 
                Profitez d&apos;exercices partagés et d&apos;un rythme adapté à vos disponibilités.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600 mb-8">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Supports de cours détaillés et exercices corrigés</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Séances interactives avec partage d&apos;écran</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Suivi continu et aide sur vos travaux pratiques</span>
                </li>
              </ul>
            </div>
            <div>
              <Button
                href="/cours-en-ligne"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Découvrir les cours en ligne
              </Button>
            </div>
          </div>

          {/* Card 2: In-Person */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Formation en présentiel
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Progressez dans un cadre interactif grâce aux explications directes et aux travaux pratiques. 
                Une immersion idéale pour consolider rapidement ses acquis avec encadrement immédiat.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600 mb-8">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Explications en direct et échanges dynamiques</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Travaux pratiques sur machine avec assistance immédiate</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Émulation de groupe et résolution collective de problèmes</span>
                </li>
              </ul>
            </div>
            <div>
              <Button
                href="/presentiel"
                variant="outline"
                size="md"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Découvrir les formations en présentiel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 : PROJETS PRATIQUES
      ========================================================================== */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="blue" size="md">
              Mise en Situation Réelle
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transformez vos connaissances en projets
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Voici des exemples de projets pédagogiques abordés au cours des formations pour vous préparer aux exigences concrètes du secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectExamples.map((project) => {
              const IconComp = iconMap[project.iconName] || Globe;
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        {project.domain}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-5 border-t border-slate-100 text-xs text-blue-600 font-medium">
                    Exemple de projet pédagogique
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 : FAQ
      ========================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="slate" size="md">
            Questions Fréquentes
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Foire Aux Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Retrouvez les réponses aux interrogations les plus courantes concernant nos formations et modalités.
          </p>
        </div>

        <Accordion items={faqData} />

        <div className="mt-8 text-center bg-blue-50/60 rounded-2xl p-6 border border-blue-100">
          <p className="text-sm text-slate-700 mb-3">
            Vous avez une question spécifique ou un besoin particulier ?
          </p>
          <Button
            href="/contact"
            variant="blueOutline"
            size="sm"
            icon={MessageSquare}
            iconPosition="left"
          >
            Poser votre question directement
          </Button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 : APPEL À L'ACTION FINAL
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl">
          {/* Subtle geometric circles background */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-blue-800/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Prêt à développer vos compétences ?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Faites le premier pas vers vos objectifs en informatique avec Provera. 
              Contactez-nous pour échanger sur vos besoins et planifier votre parcours d&apos;apprentissage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                href="/formations"
                variant="white"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Explorer les formations
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-white hover:text-white hover:bg-white/15 border border-white/30"
              >
                Contacter Provera
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

