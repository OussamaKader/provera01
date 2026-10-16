export const domainsData = [
  {
    id: "linux",
    slug: "linux",
    title: "Linux et Administration Système",
    category: "Systèmes d'exploitation",
    iconName: "Terminal",
    shortDescription: "Apprenez les commandes Linux, la gestion des fichiers, les permissions, les processus, les scripts Bash et les bases de l'administration système.",
    fullDescription: "Cette formation vous plonge au cœur du système d'exploitation GNU/Linux. Conçue pour vous rendre parfaitement autonome en ligne de commande, elle couvre les fondamentaux de l'environnement Unix, la gestion des droits, l'automatisation via des scripts Bash et l'initiation aux services d'administration système essentiels pour tout ingénieur informatique.",
    level: "Débutant à Intermédiaire",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Avoir un ordinateur fonctionnel",
      "Aucune connaissance préalable de Linux n'est requise",
      "Curiosité pour les systèmes d'exploitation et le terminal"
    ],
    objectives: [
      "Naviguer et manipuler le système de fichiers avec aisance via le shell Bash",
      "Maîtriser les permissions Unix, les utilisateurs et les groupes de sécurité",
      "Gérer les processus, les flux d'entrées/sorties et les signaux",
      "Écrire des scripts d'automatisation Bash robustes et réutilisables",
      "Comprendre les bases des services système, de l'archivage et de la maintenance"
    ],
    skills: [
      "Ligne de commande Bash",
      "Gestion des permissions & droits d'accès",
      "Gestion des processus & signaux",
      "Scripting Bash & automatisation",
      "Gestion des paquets & services",
      "Outils d'analyse et de diagnostic système"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Fondamentaux et Navigation dans l'Écosystème Linux",
        topics: [
          "Historique, philosophie Unix et distributions Linux",
          "Structure de l'arborescence Linux (FHS : /etc, /var, /home, /bin...)",
          "Commandes essentielles de navigation et manipulation (ls, cd, cp, mv, rm, mkdir)",
          "Visualisation et recherche de fichiers (cat, less, grep, find, locate)"
        ]
      },
      {
        moduleNumber: 2,
        title: "Gestion des Utilisateurs, Permissions et Sécurité",
        topics: [
          "Comptes utilisateurs, groupes et fichier /etc/passwd",
          "Modèle de permissions standards (rwx, chmod, chown, chgrp)",
          "Permissions spéciales (SUID, SGID, Sticky bit) et umask",
          "Élévation de privilèges sécurisée avec sudo"
        ]
      },
      {
        moduleNumber: 3,
        title: "Gestion des Processus et Flux d'Entrées/Sorties",
        topics: [
          "Flux standard (stdin, stdout, stderr) et redirections (>, >>, 2>&1)",
          "Tubes de communication (pipes |) et filtres (sort, uniq, cut, awk)",
          "Suivi et contrôle des processus (ps, top, htop, kill, pkill, bg, fg)",
          "Planification de tâches récurrentes avec cron et crontab"
        ]
      },
      {
        moduleNumber: 4,
        title: "Scripting Shell Bash et Automatisation",
        topics: [
          "Structure d'un script Bash, shebang et variables d'environnement",
          "Structures conditionnelles (if/elif/else, test, case)",
          "Boucles d'itération (for, while, until) et gestion des arguments",
          "Fonctions, codes de retour et gestion rigoureuse des erreurs",
          "Projet pratique : script d'audit et de sauvegarde automatique"
        ]
      },
      {
        moduleNumber: 5,
        title: "Administration de Base, Réseau et Paquets",
        topics: [
          "Gestion des gestionnaires de paquets (apt, dpkg)",
          "Gestion des services et démons avec systemctl",
          "Diagnostics réseau de base (ip, ping, netstat, ss, curl)",
          "Archivage et compression de données (tar, gzip)"
        ]
      }
    ],
    projects: [
      "Automatisation de sauvegardes incrémentielles chiffrées",
      "Script d'analyse de journaux d'accès et détection d'anomalies",
      "Mise en place d'un environnement de travail Linux complet pour développeur"
    ]
  },
  {
    id: "sql-plsql",
    slug: "sql-plsql",
    title: "SQL et PL/SQL",
    category: "Bases de données",
    iconName: "Database",
    shortDescription: "Comprendre les bases de données relationnelles, les requêtes SQL, les jointures, les fonctions, les procédures stockées et les déclencheurs PL/SQL.",
    fullDescription: "Les données sont le pilier de toute application moderne. Cette formation offre un parcours structuré pour concevoir, interroger et administrer des bases de données relationnelles avec SQL, puis monter en puissance sur la programmation procédurale avec PL/SQL (procédures, fonctions stockées, packages et triggers).",
    level: "Débutant à Intermédiaire",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Aucune connaissance préalable en base de données",
      "Aisance avec la logique formelle et la réflexion structurée"
    ],
    objectives: [
      "Comprendre le modèle relationnel et concevoir des schémas de données cohérents",
      "Maîtriser les requêtes SQL complexes, sous-requêtes et jointures",
      "Créer et maintenir des structures de données (tables, vues, contraintes, index)",
      "Développer une logique métier serveur performante avec PL/SQL",
      "Automatiser les règles d'intégrité avec des déclencheurs (triggers)"
    ],
    skills: [
      "Langage SQL (DML, DDL, DCL)",
      "Jointures complexes & agrégations",
      "Conception relationnelle & intégrité",
      "PL/SQL : Blocs anonymes, variables & curseurs",
      "Procédures et fonctions stockées",
      "Triggers & gestion des exceptions"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Modèle Relationnel et Définition des Données (DDL)",
        topics: [
          "Concepts des bases de données relationnelles et clés primaires/étrangères",
          "Création, modification et suppression de tables (CREATE, ALTER, DROP)",
          "Définition des contraintes d'intégrité (NOT NULL, UNIQUE, CHECK, FK)",
          "Types de données essentiels et bonnes pratiques de nommage"
        ]
      },
      {
        moduleNumber: 2,
        title: "Interrogation Avancée des Données (SQL DQL)",
        topics: [
          "Sélection, filtrage et tri (SELECT, WHERE, ORDER BY)",
          "Jointures relationnelles (INNER JOIN, LEFT/RIGHT JOIN, FULL OUTER JOIN)",
          "Fonctions d'agrégation et groupement (COUNT, SUM, AVG, GROUP BY, HAVING)",
          "Sous-requêtes corrélées et opérateurs ensemblistes (UNION, INTERSECT, MINUS)"
        ]
      },
      {
        moduleNumber: 3,
        title: "Manipulation des Données et Transactions (DML & TCL)",
        topics: [
          "Insertion, mise à jour et suppression (INSERT, UPDATE, DELETE)",
          "Gestion des transactions : ACID, COMMIT, ROLLBACK, SAVEPOINT",
          "Vues standards et index pour l'optimisation des performances"
        ]
      },
      {
        moduleNumber: 4,
        title: "Introduction à la Programmation PL/SQL",
        topics: [
          "Architecture PL/SQL et structure des blocs (DECLARE, BEGIN, EXCEPTION, END)",
          "Variables, types de données scalaires, composites (%TYPE, %ROWTYPE)",
          "Structures de contrôle : conditions et boucles",
          "Curseurs implicites et explicites (OPEN, FETCH, CLOSE, boucles FOR)"
        ]
      },
      {
        moduleNumber: 5,
        title: "Sous-programmes et Déclencheurs (Triggers)",
        topics: [
          "Création de procédures et fonctions stockées avec paramètres (IN, OUT, IN OUT)",
          "Gestion fine des exceptions prédéfinies et personnalisées",
          "Conception de triggers (BEFORE, AFTER, FOR EACH ROW, WHEN)",
          "Projet pratique : automatisation de l'audit et validation métier"
        ]
      }
    ],
    projects: [
      "Conception du schéma complet d'une plateforme de gestion universitaire",
      "Développement d'un module d'audit automatique des modifications sensibles via triggers",
      "Rapport d'analyse de ventes multi-critères avec requêtes et vues optimisées"
    ]
  },
  {
    id: "langage-c",
    slug: "langage-c",
    title: "Langage C et Programmation Système",
    category: "Programmation",
    iconName: "Cpu",
    shortDescription: "Étudier les variables, les conditions, les boucles, les fonctions, les pointeurs, les structures, la mémoire et les bases de la programmation système.",
    fullDescription: "Considéré comme la pierre angulaire de l'informatique moderne, le langage C forge une compréhension intime du fonctionnement de la machine et de la mémoire. Cette formation vous enseigne la rigueur algorithmique, la manipulation des pointeurs, l'allocation dynamique et la programmation bas niveau.",
    level: "Tous niveaux",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Aucun prérequis technique",
      "Volonté de comprendre le fonctionnement bas niveau de l'ordinateur"
    ],
    objectives: [
      "Comprendre le cycle de compilation (préprocesseur, compilateur, assembleur, éditeur de liens)",
      "Maîtriser les types fondamentaux, structures de contrôle et fonctions",
      "Démystifier les pointeurs, l'arithmétique de pointeurs et les adresses mémoire",
      "Gérer manuellement et proprement l'allocation dynamique (malloc, free)",
      "Concevoir des structures de données élémentaires (tableaux, listes chaînées)"
    ],
    skills: [
      "Syntaxe C & typage statique",
      "Mécanismes de compilation (GCC, Makefiles)",
      "Pointeurs & arithmétique d'adresses",
      "Gestion manuelle de la mémoire (Heap vs Stack)",
      "Structures, unions & typedef",
      "Manipulation de fichiers & flux standards"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Bases du Langage et Environnement de Développement",
        topics: [
          "Architecture matérielle, processeur, registres et mémoire RAM",
          "Outils : GCC, compilateurs, flags d'optimisation et d'alerte (-Wall, -Wextra)",
          "Structure d'un programme C : fonction main, bibliothèques standards et stdio.h",
          "Variables, types primitifs (int, float, char), formatage avec printf/scanf"
        ]
      },
      {
        moduleNumber: 2,
        title: "Structures de Contrôle et Découpage en Fonctions",
        topics: [
          "Conditions (if, else if, else, switch)",
          "Boucles itératives (for, while, do...while)",
          "Définition de fonctions, prototypes, passage de paramètres par valeur",
          "Portée des variables (locale, globale, static) et pile d'exécution (call stack)"
        ]
      },
      {
        moduleNumber: 3,
        title: "Pointeurs et Manipulation Directe de la Mémoire",
        topics: [
          "Qu'est-ce qu'une adresse mémoire ? Opérateurs & et *",
          "Passage d'arguments par référence à travers les pointeurs",
          "Arithmétique des pointeurs et relation intime entre tableaux et pointeurs",
          "Chaînes de caractères en C (terminateur nul '\\0', bibliothèque string.h)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Allocation Dynamique et Structures de Données",
        topics: [
          "Segment de pile (Stack) vs segment de tas (Heap)",
          "Fonctions d'allocation dynamique : malloc, calloc, realloc, free",
          "Détection et prévention des fuites de mémoire (memory leaks)",
          "Structures composites (struct), alias de types (typedef) et unions"
        ]
      },
      {
        moduleNumber: 5,
        title: "Structures de Données et Entrées/Sorties Fichiers",
        topics: [
          "Introduction aux listes simplement chaînées en C",
          "Manipulation de fichiers (fopen, fclose, fread, fwrite, fprintf, fscanf)",
          "Organisation de projets modulaires : fichiers d'en-tête (.h) et sources (.c)",
          "Projet pratique : développement d'un mini gestionnaire de données en console"
        ]
      }
    ],
    projects: [
      "Implémentation d'une bibliothèque de gestion de listes chaînées dynamiques",
      "Développement d'un mini-interpréteur de commandes interactif",
      "Programme d'encodage et décodage de fichiers texte avec allocation dynamique"
    ]
  },
  {
    id: "java",
    slug: "java",
    title: "Java et Programmation Orientée Objet",
    category: "Programmation",
    iconName: "Coffee",
    shortDescription: "Apprendre la programmation orientée objet, les classes, l'héritage, le polymorphisme, les interfaces, les exceptions et les collections.",
    fullDescription: "Java est l'un des langages les plus robustes et demandés dans l'industrie logicielle et d'entreprise. Cette formation vous enseigne les piliers fondamentaux de la programmation orientée objet (POO), les design patterns de base, la gestion des collections de données et les bonnes pratiques d'ingénierie logicielle.",
    level: "Débutant à Intermédiaire",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Notions de base en programmation souhaitables mais pas obligatoires",
      "Compréhension des structures algorithmiques de base (conditions, boucles)"
    ],
    objectives: [
      "Assimiler l'architecture de la plateforme Java (JVM, JRE, JDK)",
      "Concevoir et modéliser des applications selon les principes stricts de la POO",
      "Utiliser avec aisance l'héritage, le polymorphisme, les classes abstraites et interfaces",
      "Gérer les erreurs et exceptions avec rigueur",
      "Manipuler efficacement le Java Collections Framework (List, Set, Map)"
    ],
    skills: [
      "Paradigme Orienté Objet (Encapsulation, Héritage, Polymorphisme)",
      "Modélisation de classes & diagrammes",
      "Java Collections Framework (ArrayList, HashMap, etc.)",
      "Gestion des exceptions personnalisées",
      "Programmation générique (Generics)",
      "Tests unitaires et modularité du code"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Fondations de Java et Machine Virtuelle (JVM)",
        topics: [
          "Principe 'Write Once, Run Anywhere' et rôle de la JVM",
          "Syntaxe de base, types primitifs, conversions et opérateurs",
          "Structures de contrôle et tableaux statiques",
          "Organisation des classes, paquets (packages) et imports"
        ]
      },
      {
        moduleNumber: 2,
        title: "Piliers de la Programmation Orientée Objet",
        topics: [
          "Classes, constructeurs, instanciation et cycle de vie des objets",
          "Encapsulation : modificateurs d'accès (private, public, protected), getters/setters",
          "Variables et méthodes de classe (mot-clé static)",
          "Modélisation du monde réel à travers des objets connectés"
        ]
      },
      {
        moduleNumber: 3,
        title: "Héritage, Polymorphisme et Abstraction",
        topics: [
          "Héritage simple avec extends et appel au parent avec super",
          "Polymorphisme dynamique et surcharge / redéfinition de méthodes (@Override)",
          "Classes abstraites, méthodes abstraites et limitation d'instanciation",
          "Interfaces logicielles, contrats d'implémentation et découplage"
        ]
      },
      {
        moduleNumber: 4,
        title: "Gestion des Exceptions et Robustesse",
        topics: [
          "Hiérarchie des exceptions Java (Throwable, Exception, RuntimeException)",
          "Blocs try, catch, finally et try-with-resources",
          "Propagation d'erreurs avec throw et throws",
          "Création d'exceptions métier personnalisées"
        ]
      },
      {
        moduleNumber: 5,
        title: "Java Collections Framework et Généricité",
        topics: [
          "Introduction aux classes génériques (<T>)",
          "Listes dynamiques : List, ArrayList, LinkedList",
          "Ensembles et unicité : Set, HashSet, TreeSet",
          "Associations clé-valeur : Map, HashMap, TreeMap",
          "Projet pratique : application complète de gestion avec collections"
        ]
      }
    ],
    projects: [
      "Système de gestion de compte bancaire avec hiérarchie de comptes et exceptions métier",
      "Application de gestion de bibliothèque et inventaire avec collections Java",
      "Moteur de simulation d'entités avec polymorphisme et interfaces"
    ]
  },
  {
    id: "cpp",
    slug: "cpp",
    title: "C++ et Algorithmique",
    category: "Programmation",
    iconName: "Binary",
    shortDescription: "Développer ses compétences en algorithmique, structures de données, programmation orientée objet et résolution de problèmes.",
    fullDescription: "Combinant puissance bas niveau et abstractions de haut niveau, le C++ est le choix incontournable pour les systèmes critiques, les moteurs de jeu, l'intelligence artificielle et la résolution de problèmes algorithmiques compétitifs. Cette formation renforce votre rigueur d'ingénieur en abordant la STL, la complexité et les structures de données fondamentales.",
    level: "Intermédiaire",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Bases de la programmation (conditions, boucles, fonctions)",
      "Une première approche du langage C ou Java est recommandée"
    ],
    objectives: [
      "Comprendre la transition du C procédural au C++ moderne",
      "Maîtriser la gestion des ressources avec le paradigme RAII",
      "Analyser et optimiser la complexité temporelle et spatiale (notations Big O)",
      "Implémenter les structures de données fondamentales (piles, files, arbres, graphes)",
      "Exploiter la Standard Template Library (STL : vector, map, set, algorithms)"
    ],
    skills: [
      "C++ moderne (références, auto, lambdas)",
      "Gestion des ressources RAII & smart pointers",
      "Structures de données (Piles, Files, Arbres)",
      "Algorithmes de tri, recherche et récursivité",
      "Standard Template Library (STL)",
      "Résolution méthodique de problèmes algorithmiques"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Transition vers le C++ et Paradigmes Modernes",
        topics: [
          "Évolution du C++ : du C avec classes aux normes modernes (C++11 à C++20)",
          "Entrées/sorties avec iostream, espaces de noms (namespaces)",
          "Passage par référence (&), constantes (const) et déduction de type (auto)",
          "Surcharge de fonctions et paramètres par défaut"
        ]
      },
      {
        moduleNumber: 2,
        title: "Classes, Constructeurs et Gestion des Ressources (RAII)",
        topics: [
          "Classes en C++, séparation interface (.hpp) et implémentation (.cpp)",
          "Constructeurs d'initialisation, constructeurs de copie et destructeurs",
          "Principe RAII (Resource Acquisition Is Initialization)",
          "Pointeurs intelligents (std::unique_ptr, std::shared_ptr) et fin des fuites mémoire"
        ]
      },
      {
        moduleNumber: 3,
        title: "Complexité et Algorithmique Fondamentale",
        topics: [
          "Analyse de complexité asymptotique (grand O : O(1), O(log n), O(n), O(n log n))",
          "Récursivité : principe, cas de base, pile d'appels et récursivité terminale",
          "Algorithmes de tri classiques et efficaces (QuickSort, MergeSort)",
          "Algorithmes de recherche : séquentielle vs binaire dichotomique"
        ]
      },
      {
        moduleNumber: 4,
        title: "Structures de Données Clés",
        topics: [
          "Implémentation de piles (Stack LIFO) et files (Queue FIFO)",
          "Arbres binaires de recherche (BST) : insertion, parcours (préfixe, infixe, postfixe)",
          "Introduction aux graphes, représentations et parcours en largeur/profondeur (BFS/DFS)"
        ]
      },
      {
        moduleNumber: 5,
        title: "Standard Template Library (STL) et Pratique Avancée",
        topics: [
          "Conteneurs séquentiels (std::vector, std::list, std::deque)",
          "Conteneurs associatifs (std::set, std::map, std::unordered_map)",
          "Algorithmes standards de la STL (std::sort, std::find, std::transform)",
          "Projet pratique : résolveur de problèmes algorithmiques et benchmarks"
        ]
      }
    ],
    projects: [
      "Moteur d'indexation textuelle basé sur un arbre binaire de recherche optimisé",
      "Solveur de labyrinthe avec parcours de graphe (BFS/DFS) et visualisation console",
      "Benchmark comparatif de performances entre structures de données personnalisées et STL"
    ]
  },
  {
    id: "developpement-web",
    slug: "developpement-web",
    title: "Développement Web Moderne",
    category: "Développement logiciel",
    iconName: "Globe",
    shortDescription: "Découvrir HTML, CSS, JavaScript, React, Next.js et les bases de la création d'applications web modernes et réactives.",
    fullDescription: "Le web est la plateforme logicielle la plus universelle. Cette formation complète vous guide depuis les bases du balisage et de la mise en page responsive jusqu'aux architectures contemporaines avec React et Next.js, en mettant l'accent sur les composants, l'accessibilité et la performance.",
    level: "Débutant à Intermédiaire",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Connaissances informatiques élémentaires",
      "Intérêt pour le design d'interfaces et l'expérience utilisateur"
    ],
    objectives: [
      "Structurer des pages web sémantiques et accessibles avec HTML5",
      "Styliser avec précision et réactivité grâce au CSS moderne (Flexbox, Grid)",
      "Dynamiser les interfaces avec JavaScript moderne (ES6+, DOM, Async/Await)",
      "Développer des interfaces basées sur des composants réutilisables avec React",
      "Déployer des applications web performantes avec le framework Next.js"
    ],
    skills: [
      "HTML5 sémantique & accessibilité",
      "CSS3 moderne (Flexbox, CSS Grid, animations)",
      "JavaScript moderne ES6+ (Promesses, Async/Await)",
      "React (JSX, Props, Hooks : useState, useEffect)",
      "Architecture Next.js App Router",
      "Consommation d'APIs REST"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Fondamentaux du Web : HTML5 et CSS3 Sémantique",
        topics: [
          "Comment fonctionne le Web : client, serveur, requêtes HTTP et DNS",
          "Balisage HTML5 sémantique, structure de documents et métadonnées",
          "Feuilles de styles CSS : sélecteurs, modèle de boîte (box model), spécificité",
          "Mise en page moderne : Flexbox pour l'alignement et CSS Grid pour la structure"
        ]
      },
      {
        moduleNumber: 2,
        title: "Responsive Design et CSS Contemporain",
        topics: [
          "Principes du Mobile-First et Media Queries",
          "Typographie responsive, unités relatives (rem, em, vw, vh)",
          "Variables CSS (custom properties) et thèmes clair/sombre",
          "Transitions fluides et animations discrètes"
        ]
      },
      {
        moduleNumber: 3,
        title: "JavaScript Moderne (ES6+) et Manipulation du DOM",
        topics: [
          "Variables (let, const), types de données, fonctions fléchées",
          "Manipulation de l'arbre DOM et écoute des événements utilisateurs",
          "Tableaux et méthodes modernes d'itération (map, filter, reduce)",
          "Asynchronisme : requêtes HTTP avec Fetch API, promesses et async/await"
        ]
      },
      {
        moduleNumber: 4,
        title: "React : L'Interface Déclarative par Composants",
        topics: [
          "Philosophie React : composants, JSX et Virtual DOM",
          "Gestion des propriétés (props) et de l'état local (useState)",
          "Cycle de vie et effets secondaires avec le hook useEffect",
          "Gestion des listes, clés uniques et formulaires contrôlés"
        ]
      },
      {
        moduleNumber: 5,
        title: "Next.js et Construction d'Applications Web",
        topics: [
          "Introduction à Next.js et son App Router moderne",
          "Server Components vs Client Components : quand et comment les utiliser",
          "Routage dynamique, layouts partagés et métadonnées SEO",
          "Projet pratique : réalisation d'un site vitrine complet et déployable"
        ]
      }
    ],
    projects: [
      "Création d'une landing page responsive pour un service numérique",
      "Application interactive de recherche météo ou de catalogue avec API externe",
      "Site web complet avec Next.js, navigation fluide et composants interactifs"
    ]
  },
  {
    id: "developpement-mobile",
    slug: "developpement-mobile",
    title: "Développement Mobile avec Flutter",
    category: "Développement logiciel",
    iconName: "Smartphone",
    shortDescription: "Découvrir le développement d'applications mobiles avec Flutter et Dart, ainsi que la création d'interfaces adaptatives.",
    fullDescription: "Flutter est la référence pour créer des applications natives cross-platform avec une expérience visuelle fluide à 60/120 images par seconde. Cette formation vous initie au langage Dart, à la composition de widgets, à la gestion d'état et à la conception d'interfaces adaptatives pour smartphones et tablettes.",
    level: "Débutant à Intermédiaire",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Bases de programmation dans un langage (Java, C, JavaScript ou C++)",
      "Ordinateur capable d'exécuter un émulateur ou appareil mobile de test"
    ],
    objectives: [
      "Maîtriser les caractéristiques du langage Dart (typage, null safety)",
      "Comprendre la philosophie 'Everything is a Widget' de Flutter",
      "Créer des interfaces utilisateurs élégantes avec Material Design et Cupertino",
      "Gérer les interactions utilisateurs, la navigation entre écrans et l'état local",
      "Connecter une application mobile à des sources de données locales ou APIs"
    ],
    skills: [
      "Langage Dart moderne & Sound Null Safety",
      "Widgets sans état et avec état (Stateless vs Stateful)",
      "Layouts mobiles réactifs (Row, Column, Stack, ListView)",
      "Navigation et passage de données entre écrans",
      "Gestion d'état réactive",
      "Design d'interfaces adaptatives"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Le Langage Dart : Fondations pour Flutter",
        topics: [
          "Présentation de l'écosystème Flutter et architecture du framework",
          "Syntaxe Dart, typage strict et Sound Null Safety",
          "Programmation orientée objet en Dart : classes, constructeurs nommés, mixins",
          "Collections et manipulation de listes en Dart"
        ]
      },
      {
        moduleNumber: 2,
        title: "L'Arbre de Widgets et la Composition d'Écrans",
        topics: [
          "Concept fondamental : StatelessWidgets vs StatefulWidgets",
          "Widgets de disposition essentiels : Container, Padding, Center",
          "Organisation de mises en page complexes : Row, Column, Expanded, Flexible",
          "Superposition d'éléments avec Stack et Positioned"
        ]
      },
      {
        moduleNumber: 3,
        title: "Listes, Défilement et Saisie Utilisateur",
        topics: [
          "Listes à défilement performantes avec ListView.builder",
          "Grilles adaptatives avec GridView",
          "Création de formulaires mobiles : TextField, Form, validation et FocusNode",
          "Composants d'interaction : boutons, switchs, sliders et gestes tactiles (GestureDetector)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Navigation, Thèmes et Design Adaptatif",
        topics: [
          "Système de navigation Navigator et routes nommées",
          "Passage d'arguments et retour de données entre écrans",
          "Configuration de thèmes globaux (ThemeData, typographie, couleurs)",
          "Adaptation aux différentes tailles d'écrans avec MediaQuery et LayoutBuilder"
        ]
      },
      {
        moduleNumber: 5,
        title: "Gestion d'État et Données dans l'Application",
        topics: [
          "Gestion de l'état éphémère avec setState",
          "Introduction aux approches de gestion d'état globales",
          "Consommation de données JSON et modèles de données sérialisés",
          "Projet pratique : application mobile complète de prise de notes ou suivi de tâches"
        ]
      }
    ],
    projects: [
      "Application de gestion de tâches quotidiennes avec interface Material moderne",
      "Application de suivi de dépenses personnelles avec graphiques et filtres",
      "Application d'annuaire interactif avec recherche instantanée et page de profil détaillée"
    ]
  },
  {
    id: "reseaux-informatiques",
    slug: "reseaux-informatiques",
    title: "Réseaux Informatiques",
    category: "Infrastructures & Réseaux",
    iconName: "Network",
    shortDescription: "Comprendre TCP/IP, IPv4, le sous-réseautage, le routage, la commutation, le modèle OSI et les bases de la configuration réseau.",
    fullDescription: "Comprendre les réseaux informatiques est indispensable pour tout ingénieur logiciel ou administrateur. Cette formation décortique les protocoles fondamentaux de communication, du modèle OSI à la suite TCP/IP, en passant par le calcul de sous-réseaux (VLSM), la commutation de trames et le routage de paquets.",
    level: "Tous niveaux",
    formats: ["En ligne", "Présentiel"],
    prerequisites: [
      "Notions élémentaires sur l'utilisation d'un système d'exploitation",
      "Aisance avec les opérations mathématiques de base (binaire, puissances de 2)"
    ],
    objectives: [
      "Distinguer les couches des modèles OSI et TCP/IP ainsi que leurs fonctions",
      "Maîtriser l'adressage IPv4, les masques de sous-réseau et les calculs CIDR/VLSM",
      "Comprendre les protocoles de transport majeurs (TCP, UDP) et la résolution de noms (DNS, ARP)",
      "Appréhender le fonctionnement des équipements réseaux (commutateurs, routeurs)",
      "Diagnostiquer des pannes réseau courantes à l'aide d'outils d'analyse"
    ],
    skills: [
      "Modèles OSI et TCP/IP",
      "Adressage IPv4, masques & sous-réseaux (CIDR / VLSM)",
      "Protocoles de transport (TCP, UDP)",
      "Services réseau essentiels (DNS, DHCP, ARP, ICMP)",
      "Principes de routage & commutation",
      "Diagnostic et analyse de trames (Wireshark, traceroute, ping)"
    ],
    program: [
      {
        moduleNumber: 1,
        title: "Modèles de Référence : OSI et Suite TCP/IP",
        topics: [
          "Topologies physiques et logiques (étoile, bus, maillée)",
          "Les 7 couches du modèle OSI : de la couche physique à l'application",
          "La suite de protocoles TCP/IP et le processus d'encapsulation / décapsulation",
          "Notion d'Unités de Données de Protocole (PDU : bits, trames, paquets, segments)"
        ]
      },
      {
        moduleNumber: 2,
        title: "Adressage IPv4 et Calcul de Sous-Réseaux",
        topics: [
          "Système binaire et conversion binaire / décimal",
          "Structure d'une adresse IPv4 : partie réseau (Net ID) et partie hôte (Host ID)",
          "Classes d'adresses historiques (A, B, C) et adresses privées (RFC 1918)",
          "Masques de sous-réseau, notation CIDR (/24, /27...)",
          "Technique de découpage en sous-réseaux à longueur variable (VLSM)"
        ]
      },
      {
        moduleNumber: 3,
        title: "Couche Liaison et Résolution d'Adresses",
        topics: [
          "Adresses matérielles MAC et trame Ethernet",
          "Fonctionnement des commutateurs (switches) et table d'adresses MAC",
          "Protocole de résolution d'adresses ARP et table ARP",
          "Notion de domaines de collision et domaines de diffusion (broadcast)"
        ]
      },
      {
        moduleNumber: 4,
        title: "Couche Réseau et Protocoles de Transport",
        topics: [
          "Rôle des routeurs et table de routage",
          "Routage statique vs routage dynamique",
          "Protocole ICMP et utilitaires d'analyse (ping, traceroute)",
          "Comparaison approfondie TCP (fiable, connecté, poignée de main) vs UDP (rapide, sans connexion)",
          "Numéros de ports et multiplexage d'applications"
        ]
      },
      {
        moduleNumber: 5,
        title: "Services Applicatifs et Diagnostic Réseau",
        topics: [
          "Protocole DHCP : attribution dynamique d'adresses (DORA)",
          "Système de noms de domaine (DNS) : résolution hiérarchique et enregistrements",
          "Introduction à la capture et analyse de trafic réseau avec Wireshark",
          "Projet pratique : simulation d'une infrastructure réseau multi-sites"
        ]
      }
    ],
    projects: [
      "Conception et plan d'adressage VLSM pour une entreprise répartie sur 4 départements",
      "Simulation d'un réseau commuté et routé avec validation des tables de routage",
      "Capture et analyse pas-à-pas d'une session HTTP/DNS avec Wireshark"
    ]
  }
];

export const whyChooseProvera = [
  {
    iconName: "BookOpen",
    title: "Explications claires et progressives",
    description: "Les concepts complexes sont découpés pas à pas, avec une pédagogie axée sur l'intuition et la compréhension durable plutôt que le par cœur."
  },
  {
    iconName: "Code2",
    title: "Exercices adaptés à chaque niveau",
    description: "Des exercices graduels permettent de valider chaque notion avant de passer à l'étape suivante, quel que soit votre point de départ."
  },
  {
    iconName: "Wrench",
    title: "Travaux pratiques réels",
    description: "L'apprentissage passe par la pratique directe dans de véritables environnements de développement et de simulation informatique."
  },
  {
    iconName: "FolderGit2",
    title: "Projets concrets et applicables",
    description: "Construisez des mini-projets représentatifs du travail d'ingénieur logiciel et de technicien informatique pour consolider votre autonomie."
  },
  {
    iconName: "Layers",
    title: "Formations en ligne et en présentiel",
    description: "Profitez de deux formats complémentaires selon votre disponibilité et vos préférences d'apprentissage."
  },
  {
    iconName: "Sparkles",
    title: "Accompagnement vers l'autonomie",
    description: "Un encadrement bienveillant qui vous apprend à lire la documentation, débugger par vous-même et penser comme un informaticien."
  }
];

export const howItWorksSteps = [
  {
    step: "Étape 1",
    title: "Choisissez votre formation",
    description: "Découvrez nos 8 domaines d'ingénierie informatique et sélectionnez le parcours qui correspond à vos objectifs académiques ou professionnels."
  },
  {
    step: "Étape 2",
    title: "Apprenez à votre rythme",
    description: "Progressez avec des explications structurées, des exemples de code commentés et des exercices pratiques adaptés au programme."
  },
  {
    step: "Étape 3",
    title: "Mettez vos compétences en pratique",
    description: "Réalisez des travaux dirigés, des simulations et des projets concrets pour renforcer votre compréhension et valoriser vos acquis."
  }
];

export const projectExamples = [
  {
    id: 1,
    title: "Création d'une application web",
    domain: "Développement web",
    iconName: "Globe",
    description: "Conception d'une application dynamique avec composants réutilisables, navigation fluide et communication avec une API externe."
  },
  {
    id: 2,
    title: "Développement d'une application mobile",
    domain: "Développement mobile",
    iconName: "Smartphone",
    description: "Création d'une interface mobile élégante et réactive en Flutter avec gestion d'état et navigation multi-écrans."
  },
  {
    id: 3,
    title: "Conception d'une base de données",
    domain: "SQL et PL/SQL",
    iconName: "Database",
    description: "Modélisation relationnelle complète, création de tables avec contraintes et automatisation des règles d'intégrité via déclencheurs."
  },
  {
    id: 4,
    title: "Programmation en C ou Java",
    domain: "Langage C / Java",
    iconName: "Cpu",
    description: "Développement d'applications structurées exploitant l'allocation dynamique de mémoire ou les classes orientées objet."
  },
  {
    id: 5,
    title: "Simulation d'un réseau informatique",
    domain: "Réseaux informatiques",
    iconName: "Network",
    description: "Planification d'un plan d'adressage IPv4 avec sous-réseaux VLSM et simulation du routage et de la commutation."
  },
  {
    id: 6,
    title: "Scripts d'automatisation sous Linux",
    domain: "Linux et Shell Bash",
    iconName: "Terminal",
    description: "Écriture de scripts d'administration pour la sauvegarde de répertoires, l'analyse de logs et la gestion de tâches planifiées."
  }
];

export const faqData = [
  {
    question: "À qui s'adressent les formations Provera ?",
    answer: "Les formations s'adressent aux étudiants en informatique (Licence, Master, BTS, écoles d'ingénieurs), aux débutants désireux de s'initier aux technologies du numérique, ainsi qu'aux passionnés souhaitant renforcer leurs bases techniques."
  },
  {
    question: "Dois-je avoir des connaissances préalables en programmation ?",
    answer: "Plusieurs formations comme Linux, le Langage C, SQL ou le Développement Web démarrent à partir de zéro et ne requièrent aucune connaissance préalable. D'autres parcours, comme C++ ou Flutter, tirent avantage d'une première familiarité avec la logique de programmation."
  },
  {
    question: "Puis-je suivre une formation entièrement en ligne ?",
    answer: "Oui. Toutes nos formations sont pensées pour être suivies à distance grâce à des supports pédagogiques détaillés, des sessions interactives et des exercices pratiques accompagnés."
  },
  {
    question: "Proposez-vous des formations en présentiel ?",
    answer: "Oui, des sessions en présentiel sont proposées pour permettre un apprentissage immersif, interactif et direct avec travaux pratiques en direct. N'hésitez pas à nous contacter pour connaître les modalités."
  },
  {
    question: "Comment choisir la formation la plus adaptée à mes objectifs ?",
    answer: "Si vous démarrez, le Langage C ou le Développement Web sont d'excellentes portes d'entrée. Pour l'administration et le cloud, commencez par Linux et les Réseaux. Pour les données, privilégiez SQL. Vous pouvez également nous contacter directement pour obtenir un conseil personnalisé."
  },
  {
    question: "Comment demander des informations complémentaires ?",
    answer: "Vous pouvez nous joindre directement via WhatsApp au +222 47185763 ou par email à oussamamedlemine167@gmail.com, ou utiliser le formulaire sur notre page Contact."
  },
  {
    question: "Les prix et les durées des cours sont-ils déjà disponibles ?",
    answer: "Les plannings, les tarifs et les durées précises sont adaptés selon le format (en ligne ou en présentiel) et le parcours choisi. Contactez-nous directement pour recevoir toutes les informations actualisées."
  }
];

export const contactInfo = {
  founderName: "Oussama Mohamed Lemine",
  founderTitle: "Étudiant en Master ILCS & Fondateur de Provera",
  phone: "+222 47185763",
  phoneRaw: "22247185763",
  email: "oussamamedlemine167@gmail.com",
  whatsappUrl: "https://wa.me/22247185763?text=Bonjour%20Provera,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20formations%20en%20g%C3%A9nie%20informatique.",
  mailtoUrl: "mailto:oussamamedlemine167@gmail.com?subject=Demande%20d'informations%20%E2%80%94%20Provera"
};

