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
    redux,
    php,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    framework,
    createcard,
    mdp,
    portfolio,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "À propos",
    },
    {
        id: "experience",
        title: "Expérience",
    },
    {
        id: "realisations",
        title: "Realisations",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Développeur Web",
        icon: web,
    },
    {
        title: "Développeur Front-end",
        icon: mobile,
    },
    {
        title: "Développeur Back-end",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
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
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
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
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        name: "Chris Brown",
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
        name: "Frameworks",
        description:
            "Un des premiers sites que j'ai développé pour m'entraîner à coder en HTML, CSS et JavaScript. J'ai inclu sur la page d'accueil un effet parralax très joli visuellement.",
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
            "Le portfolio sur lequel vous êtes actuellement. Développé en suivant un livecoding qui m'a beaucoup appris sur les frameworks React, Tailwind ainsi que Three.js et Canvas.",
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
];

export { services, technologies, experiences, testimonials, projects };