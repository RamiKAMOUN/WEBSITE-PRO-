import img10 from '../images/2010.png';
import img11 from '../images/2011.jpg';
import img12 from '../images/2012.jpg';
import img13 from '../images/2013.jpg';
import meta from '../images/meta.png'

import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import reactjs from '../images/reactjs.png'
import redux from  '../images/redux.png'

import tailwind from '../images/tailwind.png'
import nodejs from '../images/nodejs.png'
import SharePoint from '../images/SharePoint.png'
import git from '../images/git.png'
import figma from  '../images/figma.png'
import threejs from '../images/threejs.svg'
import docker from '../images/docker.png'
import typescript from  '../images/typescript.png'
import angular from '../images/angular.png'
import office365 from '../images/Office365.jpg'
import csharp from '../images/c-sharp.png'
import ASPNET from '../images/aspnetcore.png'


const technologies = [
  {
    name: "SharePoint",
    icon: SharePoint ,
  },
  {
    name: "ASPNET",
    icon: ASPNET,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "office365",
    icon: office365,
  },

  {
    name: "Angular",
    icon: angular,
  },

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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
   
];


const experiences = [
  {
    title: "Création de la société PROGED",
    company_name: "",
    icon:meta,
    iconBg: "#383E56",
    date: "2010",
    points: [
      "Création de la société PROGED avec l’idée de proposer des solutions innovantes sur SharePoint.",
    ],
  },
  {
    title: "Création de PROGED International ",
    company_name: "",
    image:{img11},
    iconBg: "#E6DEDD",
    date: "2011",
    points: [
      "Création de PROGED International pour viser un marché plus vaste à savoir l’Europe et l’Afrique",
    ],
  },
  {
    title: "Inauguration de notre centre de service à Sfax",
    company_name: "",
    image:{img12},
    iconBg: "#383E56",
    date: "2012",
    points: [
      "Inauguration de notre centre de service à Sfax (Tunisie)",
    ],
  },
  {
    title: "Obtention de notre Compétence Microsoft Silver ",
    company_name: "",
    image:{img13},
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "Obtention de notre Compétence Microsoft Silver : portail et collaboration",
    ],
  },
  {
    title: "Croissance Internationale",
    company_name: "",
    image:{img10},
    iconBg: "#383E56",
    date: "2014",
    points: [
      "Signature de partenariats stratégiques en France et en Europe",
    ],
  },
  {
    title: "Nouveau Service d'Administration Déléguée Dévoilé",
    company_name: "",
    image:{img10},
    iconBg: "#E6DEDD",
    date: "2015",
    points: [
      "Lancement du service d’administration déléguée d’Office 365",
    ],
  },
  {
    title: "Alliance Académique",
    company_name: "",
    image:{img10},
    iconBg: "#383E56",
    date: "2016",
    points: [
      "Signature de convention de partenariat avec les universités réputées en informatique",
    ],
  },
  {
    title: " PROGED, Fournisseur de Talents Microsoft",
    company_name: "",
    image:{img10},
    iconBg: "#E6DEDD",
    date: "2017",
    points: [
      "PROGED est un partenaire stratégique et fournisseur de talents certifiés Microsoft",
    ],
  },
  {
    title: "Expansion Européenne",
    company_name: "",
    image:{img10},
    iconBg: "#383E56",
    date: "2018",
    points: [
      "Création de la société PROGED SOLUTIONS en France",
    ],
  },
  {
    title: "PROGED au Cœur de l'Excellence ",
    company_name: "",
    icon: img10,
    iconBg: "#E6DEDD",
    date: "2019",
    points: [
      "Participation à des missions d’expertise chez les groupes du CAC40",
    ],
  },
];



const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
   
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/",
  },
];

export {experiences, projects,technologies };
