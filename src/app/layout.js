import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Provera — Plateforme de Formation en Génie Informatique",
  description: "Formations pratiques en génie informatique : Linux, Programmation C, C++, Java, SQL & PL/SQL, Développement Web, Flutter Mobile et Réseaux. En ligne et en présentiel.",
  keywords: [
    "Formation informatique",
    "Génie informatique",
    "Apprendre la programmation",
    "Linux",
    "Langage C",
    "Java",
    "C++",
    "SQL PL/SQL",
    "Développement Web",
    "Flutter",
    "Réseaux informatiques",
    "Provera",
    "Oussama Mohamed Lemine"
  ],
  authors: [{ name: "Oussama Mohamed Lemine" }],
  creator: "Oussama Mohamed Lemine",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Provera — Plateforme de Formation en Génie Informatique",
    description: "Apprenez l'informatique. Construisez votre avenir numérique avec des formations concrètes et adaptées.",
    url: "https://provera.mr",
    siteName: "Provera",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

