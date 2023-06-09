import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    php,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    pebeo,
    ecole,
    framework,
    createcard,
    mdp,
    portfolio,
    pokemon,
    threejs,
    cv,
    users,
    sumz,
    mario,
    grill,
    applirh,
} from "../assets";

export const navLinks = [
    {
        id: "cv",
        title: "CV",
        src: cv,
    },
    {
        id: "about",
        title: "À propos",
        src: "#about"
    },
    {
        id: "experience",
        title: "Expérience",
        src: "#experience",
    },
    {
        id: "realisations",
        title: "Réalisations",
        src: "#realisations",

    },
    {
        id: "contact",
        title: "Contact",
        src: "#contact",

    },
];

const services = [
    {
        title: "Développeur Web",
        icon: web,
    },
    {
        title: "Développeur Mobile",
        icon: creator,
    },
    {
        title: "Développeur Front-end",
        icon: mobile,
    },
    {
        title: "Développeur Back-end",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Technicien Chimiste",
        company_name: "Pébéo",
        icon: pebeo,
        iconBg: "#fff",
        date: "Juin 2017 - Février 2023",
        points: [
            "Formulation et contretypage de produits artistiques.",
            "Développement de nouveaux produits catalogue ou mono client et optimisation des produits existants.",
            "Rationalisation de matières premières et de coûts.",
            "Contrôle qualité de produits en cours de fabrication et de produits finis (Viscosité, Densité, pH, Opacité, Teinte, Temps de séchage...)",
        ],
    },
    {
        title: "Reconversion professionnelle - Formation Développeur Web et Web Mobile",
        company_name: "École Ri7 - École Supérieure de Développement Web",
        icon: ecole,
        iconBg: "#fafafa",
        date: "Février 2023 - Novembre 2023",
        points: [
            "Apprentissage des langages de programmation les plus recherchés du marché (HTML, CSS, Python, JavaScript, PHP...)",
            "Concevoir et déployer des solutions logicielles qui répondent à des problématiques concrètes d’entreprise.",
        ],
    },
    {
        title: "Développeur Web Junior",
        company_name: "Entreprise : Pour l'instant inconnue",
        icon: meta,
        iconBg: "#fafafa",
        date: "Septembre 2023 - ?",
        points: [
            "Je cherche une première expérience professionnelle",
            "Une alternance sur 12 mois pour poursuivre mes études et obtenir un niveau bac+3",
            "Développer des sites internet et/ou des applications mobiles",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Travailler avec Thomas a été un plaisir absolu. Son expertise dans le domaine, sa fiabilité et son attitude amicale font de lui un atout inestimable pour l'équipe. Il va toujours au-delà des attentes pour s'assurer que le projet est terminé à temps et avec un haut degré de qualité. Je recommanderais fortement de travailler avec Thomas",
        name: "Thomas Oliver",
        designation: "Développeur Web",
        company: "Ecole Ri7",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
        testimonial:
            "Ses connaissances et sa perspicacité m'ont aidé à prendre les bonnes décisions pour mon entreprise. Il est toujours disponible quand j'ai besoin de lui et ses conseils sont justes. Il m'a permis de faire passer mon entreprise au niveau supérieur et je lui en suis très reconnaissant.",
        name: "Maitre GIMS",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Son expertise et ses connaissances en conception de sites Web ont énormément amélioré notre site, entraînant une augmentation de 100% du chiffre d'affaires! Je recommande fortement Thomas pour tout projet de conception Web - vous ne serez pas déçu.",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mario Game",
        description:
            "Création d'un jeu Mario de type Sidescroller en suivant un tutoriel sur Youtube et en le modifiant pour le rendre plus personnel. Ce tutoriel m'a permis d'apprendre à utiliser canvas et à créer un jeu en JavaScript.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "canvas",
                color: "orange-text-gradient",
            }
        ],
        image: mario,
        source_code_link: "https://github.com/Kleysius/Mario-Game.git",
    },
    {
        name: "AI Summarizer",
        description:
            "J'utilise une API qui extrait le corps de l'article d'une URL et utilise GPT pour résumer le contenu de l'article. Utile pour l'exploration de texte. Les URLs sont enregistrées, peuvent être copiées et supprimées.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            }
        ],
        image: sumz,
        source_code_link: "https://github.com/Kleysius/AI-Resume.git",
    },
    {
        name: "Frameworks",
        description:
            "Reproduction d'un site vitrine - Un des premiers sites que j'ai développé pour m'entraîner à coder en HTML, CSS et JavaScript. J'ai inclu sur la page d'accueil un effet parralax très joli visuellement.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: framework,
        source_code_link: "https://github.com/Kleysius/Framework.git",
    },
    {
        name: "Création de cartes",
        description:
            "Un site web permettant de créer des cartes sur le thème de Donjon et Dragon avec un effet de 3D. L'utilisateur a la possibilité de modifier ou supprimer une carte déjà créée.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: createcard,
        source_code_link: "https://github.com/Kleysius/CreateCharacter.git",
    },
    {
        name: "Générateur de MdP",
        description:
            "Un générateur de mot de passe complet auquel on accède via des formulaires d'inscription et de connexion design codés en php.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "php",
                color: "orange-text-gradient",
            },
        ],
        image: mdp,
        source_code_link: "https://github.com/Kleysius/PasswordGenerator-Login.git",
    },
    {
        name: "Portfolio 3D",
        description:
            "Portfolio développé en suivant un livecoding qui m'a beaucoup appris sur les frameworks React, Tailwind ainsi que Three.js et Canvas. J'ai ensuite modifié le site pour le rendre plus personnel.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "three.js",
                color: "orange-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Kleysius/PasswordGenerator-Login.git",
    },
    {
        name: "Pokemon API",
        description:
            "Ce site web permet de rechercher via une API un pokemon par son nom ou son identifiant. Il est possible d'afficher et de voir le détail de chaque pokemon.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: pokemon,
        source_code_link: "https://github.com/Kleysius/Pokemon-API.git",
    },
    {
        name: "Users API",
        description:
            "Cette application permet de visualiser les utilisateurs récupérés sur une API. On peut voir le détail de chaque utilisateur, en ajouter un nouveau, le modifier ou le supprimer.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: users,
        source_code_link: "https://github.com/Kleysius/Users-API.git",
    },
    {
        name: "GrillMasters",
        description:
            "Un site vitrine d'un FastFood que j'ai appelé GrillMasters. Possibilité de consulter le menu, les services proposés et une partie contact. From scratch, responsive.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: grill,
        source_code_link: "https://github.com/Kleysius/FastFood-Website.git",
    },
    {
        name: "Application RH",
        description:
            "Une plateforme qui permet de gérer des employés, possibilité d'en ajouter, les supprimer, les modifier ou les blâmer. Une inscription est requise pour se connecter à l'application.",
        tags: [
            {
                name: "twig",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: applirh,
        source_code_link: "https://github.com/Kleysius/ApplicationRH.git",
    },
];

export { services, technologies, experiences, testimonials, projects };