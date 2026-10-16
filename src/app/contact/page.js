import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ui/ContactForm";
import { contactInfo } from "@/data/formations";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export const metadata = {
  title: "Contact & Informations — Provera",
  description: "Contactez Provera pour toute question sur nos formations en génie informatique. WhatsApp : +222 47185763, Email : oussamamedlemine167@gmail.com.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge variant="blue" size="md" icon={MessageSquare}>
            Support & Échanges
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contactez Provera
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Vous souhaitez des informations sur un programme, des précisions sur les formats disponibles ou un accompagnement personnalisé ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Cards + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Card */}
            <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Discussion directe WhatsApp
                </h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Canal le plus rapide pour échanger sur vos objectifs et poser toutes vos questions.
                </p>
              </div>
              <p className="font-mono text-base font-semibold text-emerald-900">
                {contactInfo.phone}
              </p>
              <Button
                href={contactInfo.whatsappUrl}
                variant="primary"
                size="md"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                icon={ArrowUpRight}
              >
                Ouvrir WhatsApp
              </Button>
            </div>

            {/* Email Direct Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Messagerie électronique
                </h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Envoyez vos questions détaillées ou demandes institutionnelles par email.
                </p>
              </div>
              <p className="font-mono text-sm font-semibold text-slate-800 break-all">
                {contactInfo.email}
              </p>
              <Button
                href={contactInfo.mailtoUrl}
                variant="outline"
                size="md"
                className="w-full"
                icon={ArrowUpRight}
              >
                Envoyer un email direct
              </Button>
            </div>

            {/* Commitment Note */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-600">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Interlocuteur unique & qualifié</span>
              </div>
              <p className="leading-relaxed">
                Toutes les demandes sont traitées directement par le responsable pédagogique afin de vous apporter des réponses techniques précises.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

