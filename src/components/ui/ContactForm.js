"use client";

import React, { useState } from "react";
import { domainsData, contactInfo } from "@/data/formations";
import Button from "@/components/ui/Button";
import { MessageSquare, Mail, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    formation: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [activeAction, setActiveAction] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Le nom complet est obligatoire.";
    }
    if (!formData.email.trim()) {
      errs.email = "L'adresse email est obligatoire.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Veuillez saisir une adresse email valide.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Le sujet est obligatoire.";
    }
    if (!formData.message.trim()) {
      errs.message = "Le message est obligatoire.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const text =
      `Bonjour Provera,\n\n` +
      `Nom : ${formData.fullName}\n` +
      `Email : ${formData.email}\n` +
      `Sujet : ${formData.subject}\n` +
      (formData.formation ? `Formation concernée : ${formData.formation}\n` : "") +
      `\nMessage :\n${formData.message}`;

    const url = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setActiveAction("whatsapp");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const emailSubject = `[Contact Provera] ${formData.subject}`;
    const emailBody =
      `Bonjour Provera,\n\n` +
      `Nom complet : ${formData.fullName}\n` +
      `Adresse email : ${formData.email}\n` +
      (formData.formation ? `Formation concernée : ${formData.formation}\n` : "") +
      `\nMessage :\n${formData.message}\n`;

    const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailto;
    setActiveAction("email");
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
      <div className="mb-8 space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Envoyer un message
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Complétez le formulaire ci-dessous puis choisissez d&apos;ouvrir directement votre application WhatsApp ou votre messagerie email avec votre texte prêt à être expédié.
        </p>
      </div>

      <form className="space-y-5">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Nom complet <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: null });
              }}
              placeholder="Ex : Oussama Lemine"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                errors.fullName ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-white"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Adresse email <span className="text-blue-600">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
              placeholder="Ex : vous@domaine.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                errors.email ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Subject & Formation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Sujet de la demande <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: null });
              }}
              placeholder="Ex : Renseignement formation Linux"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                errors.subject ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-white"
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Formation concernée (facultative)
            </label>
            <select
              value={formData.formation}
              onChange={(e) => setFormData({ ...formData, formation: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">-- Aucune / Question générale --</option>
              {domainsData.map((d) => (
                <option key={d.id} value={d.title}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Message <span className="text-blue-600">*</span>
          </label>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: null });
            }}
            placeholder="Décrivez votre besoin, votre niveau actuel ou vos questions..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y transition-colors ${
              errors.message ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-white"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Actions */}
        <div className="pt-3 flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={handleWhatsApp}
            variant="primary"
            size="md"
            icon={MessageSquare}
            iconPosition="left"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Transmettre via WhatsApp
          </Button>

          <Button
            type="button"
            onClick={handleEmail}
            variant="outline"
            size="md"
            icon={Mail}
            iconPosition="left"
            className="flex-1"
          >
            Ouvrir mon application Email
          </Button>
        </div>

        {/* Honest feedback note */}
        {activeAction && (
          <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">
                Application {activeAction === "whatsapp" ? "WhatsApp" : "Email"} déclenchée !
              </p>
              <p className="text-blue-700 mt-0.5">
                Votre message a été préformaté dans votre application pour vous permettre de l&apos;envoyer sans ressaisir vos informations.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

