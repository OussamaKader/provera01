"use client";

import React, { useState } from "react";
import { domainsData, contactInfo } from "@/data/formations";
import Button from "@/components/ui/Button";
import { MessageSquare, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function PresentielInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    formation: domainsData[0]?.title || "",
    city: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedMethod, setSubmittedMethod] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Le nom complet est obligatoire";
    if (!formData.phone.trim()) errs.phone = "Le numéro de téléphone est obligatoire";
    if (!formData.city.trim()) errs.city = "La ville est obligatoire";
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Veuillez saisir une adresse email valide";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Bonjour Provera,\nJe souhaite demander des informations pour une formation en PRÉSENTIEL.\n\n` +
      `• Nom : ${formData.fullName}\n` +
      `• Téléphone : ${formData.phone}\n` +
      `• Ville : ${formData.city}\n` +
      `• Formation souhaitée : ${formData.formation}\n` +
      (formData.email ? `• Email : ${formData.email}\n` : "") +
      (formData.message ? `• Message : ${formData.message}\n` : "");

    const url = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmittedMethod("whatsapp");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Demande de formation en présentiel — ${formData.fullName}`;
    const body = `Bonjour Provera,\n\nJe souhaite obtenir des informations pour une formation en présentiel.\n\n` +
      `Nom complet : ${formData.fullName}\n` +
      `Téléphone : ${formData.phone}\n` +
      `Ville : ${formData.city}\n` +
      `Formation souhaitée : ${formData.formation}\n` +
      `Email : ${formData.email}\n\n` +
      `Message :\n${formData.message || "Aucun message complémentaire."}\n`;

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmittedMethod("email");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
      <div className="mb-6 space-y-2">
        <h3 className="text-xl font-bold text-slate-900">
          Demande d&apos;informations — Formation en présentiel
        </h3>
        <p className="text-sm text-slate-600">
          Remplissez les informations ci-dessous pour nous transmettre votre demande directement par WhatsApp ou par email.
        </p>
      </div>

      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
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
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
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

        {/* Email & Phone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Numéro de téléphone <span className="text-blue-600">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: null });
              }}
              placeholder="Ex : +222 47 18 57 63"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                errors.phone ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Adresse email (facultatif)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
              placeholder="Ex : contact@domaine.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
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

        {/* Formation & City grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Formation souhaitée <span className="text-blue-600">*</span>
            </label>
            <select
              value={formData.formation}
              onChange={(e) => setFormData({ ...formData, formation: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {domainsData.map((d) => (
                <option key={d.id} value={d.title}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Ville <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => {
                setFormData({ ...formData, city: e.target.value });
                if (errors.city) setErrors({ ...errors, city: null });
              }}
              placeholder="Ex : Nouakchott"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                errors.city ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-white"
              }`}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.city}</span>
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Message complémentaire (facultatif)
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Précisez vos disponibilités, vos objectifs ou vos questions..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={handleWhatsAppSubmit}
            variant="primary"
            size="md"
            icon={MessageSquare}
            iconPosition="left"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Envoyer via WhatsApp
          </Button>

          <Button
            type="button"
            onClick={handleEmailSubmit}
            variant="outline"
            size="md"
            icon={Mail}
            iconPosition="left"
            className="flex-1"
          >
            Envoyer par Email
          </Button>
        </div>

        {/* Honest feedback note */}
        {submittedMethod && (
          <div className="mt-3 p-3 rounded-xl bg-blue-50 border border-blue-200/80 text-xs text-blue-800 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>
              Votre client {submittedMethod === "whatsapp" ? "WhatsApp" : "Email"} a été ouvert avec les informations préremplies pour finaliser votre envoi direct.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}

