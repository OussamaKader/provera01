# Provera — Plateforme de Formation en Génie Informatique

**Provera** est une plateforme web moderne et professionnelle dédiée aux formations et services en génie informatique (systèmes d'exploitation, programmation, bases de données, développement web & mobile, réseaux).

Fondée par **Oussama Mohamed Lemine**, étudiant en Master ILCS, Provera met l'accent sur une pédagogie progressive, rigoureuse et orientée vers la pratique.

---

## 🚀 Technologies Utilisées

- **Framework** : [Next.js](https://nextjs.org/) 14 (App Router, Server Components)
- **Bibliothèque UI** : [React](https://react.dev/) 18 (JavaScript & JSX)
- **Styles & Responsive Design** : [Tailwind CSS](https://tailwindcss.com/) & CSS Moderne
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Éléments 3D** : [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Icônes** : [Lucide React](https://lucide.dev/)

---

## 🎨 Identité Visuelle

- **Palette de couleurs** :
  - Blanc dominant : `#FFFFFF`
  - Bleu principal : `#2563EB`
  - Bleu foncé : `#0F172A`
  - Bleu clair : `#DBEAFE`
  - Gris très clair : `#F8FAFC`
  - Gris clair : `#F1F5F9`
  - Gris moyen : `#64748B`
  - Gris foncé : `#334155`
- Typographie épurée, bordures subtiles, ombres douces et transitions fluides.

---

## 📁 Architecture du Projet

```text
teste/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.js              # Layout racine avec SEO et métadonnées
│   │   ├── globals.css            # Styles globaux Tailwind & animations
│   │   ├── page.js                # Page d'accueil complète (Hero 3D, Domaines, Méthode, FAQ...)
│   │   ├── not-found.js           # Page 404 personnalisée
│   │   ├── formations/
│   │   │   ├── page.js            # Catalogue interactif avec filtres et recherche
│   │   │   └── [slug]/
│   │   │       └── page.js        # Fiches détaillées dynamiques par domaine
│   │   ├── cours-en-ligne/
│   │   │   └── page.js            # Page dédiée à l'apprentissage à distance
│   │   ├── presentiel/
│   │   │   └── page.js            # Page dédiée aux formations en salle & TP
│   │   ├── a-propos/
│   │   │   └── page.js            # Présentation de la mission et du fondateur
│   │   └── contact/
│   │       └── page.js            # Page contact fonctionnelle (WhatsApp, Email, formulaire)
│   ├── components/
│   │   ├── 3d/
│   │   │   └── TechHeroCanvas.js  # Élément 3D Three.js / R3F réactif et accessible
│   │   ├── formations/
│   │   │   ├── FormationCard.js   # Carte de formation réutilisable
│   │   │   ├── FormationFilters.js# Barre de recherche et filtres de catalogue
│   │   │   └── PresentielInquiryForm.js # Formulaire de demande présentiel
│   │   ├── layout/
│   │   │   ├── Navbar.js          # Navigation sticky responsive avec tiroir mobile
│   │   │   └── Footer.js          # Pied de page avec liens, copyright dynamique
│   │   └── ui/
│   │       ├── Accordion.js       # Accordéon interactif animé pour FAQ
│   │       ├── Badge.js           # Badges sémantiques
│   │       ├── Button.js          # Bouton accessible multi-variantes
│   │       ├── Card.js            # Conteneur carte moderne
│   │       ├── ContactForm.js     # Formulaire de contact validé
│   │       └── Logo.js            # Logo vectoriel SVG Provera
│   ├── data/
│   │   └── formations.js          # Données centralisées des formations et contenus
│   └── lib/
│       └── utils.js               # Utilitaires de classes conditionnelles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
└── README.md
```

---

## 🛠️ Installation et Exécution

### 1. Prérequis
- Node.js (version 18+ recommandée)
- npm (version 9+ recommandée)

### 2. Installation des dépendances
```bash
npm install
```

### 3. Lancement en mode développement
```bash
npm run dev
```
Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 4. Construction de production (Build)
```bash
npm run build
```

### 5. Démarrage du serveur de production
```bash
npm start
```

---

## 📞 Coordonnées de Contact Intégrées

- **Téléphone / WhatsApp** : `+222 47185763`
- **Email** : `oussamamedlemine167@gmail.com`
- **Lien WhatsApp direct** : [https://wa.me/22247185763](https://wa.me/22247185763)

# provera01
# provera01
