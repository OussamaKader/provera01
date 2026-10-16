import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { contactInfo, domainsData } from "@/data/formations";
import { Phone, Mail, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: "Accueil", href: "/" },
    { name: "Toutes les formations", href: "/formations" },
    { name: "Cours en ligne", href: "/cours-en-ligne" },
    { name: "Formations en présentiel", href: "/presentiel" },
    { name: "À propos du fondateur", href: "/a-propos" },
    { name: "Contact & Informations", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white inline-block p-1.5 rounded-xl shadow-sm">
              <Logo size="default" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Provera est une plateforme spécialisée dans l&apos;apprentissage du génie informatique. 
              Des fondations de la programmation aux systèmes et réseaux, développez des compétences concrètes et durables.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Initiative fondée par Oussama Mohamed Lemine</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations domains */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Domaines Clés
            </h3>
            <ul className="space-y-2.5 text-sm">
              {domainsData.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/formations/${item.slug}`}
                    className="text-slate-400 hover:text-white transition-colors truncate block group"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/formations"
                  className="text-blue-400 hover:text-blue-300 text-xs font-medium inline-flex items-center gap-1 pt-1"
                >
                  <span>Voir tous les 8 domaines</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2.5 break-all"
                >
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 hover:bg-emerald-900 border border-emerald-800/80 text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Provera — Plateforme d&apos;apprentissage en Génie Informatique. Tous droits réservés.
          </p>
          <p className="text-slate-400">
            Conçu pour l&apos;excellence académique et technique.
          </p>
        </div>
      </div>
    </footer>
  );
}

