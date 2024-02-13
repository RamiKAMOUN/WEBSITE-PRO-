import { BsFillSendFill } from "react-icons/bs";
import { BsFillAirplaneFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { AiTwotoneCustomerService } from "react-icons/ai";
import {imgWAJDI} from "./images/Wajdi-Mekni-40x40_c.jpg"
import {imgTark} from "./images/Taarak-ZEHAF-40x40_c.jpg"
import {imgJACQUES} from "./images/Jacques-SERRE-40x40_c.jpg"


export const links = [
    {
        name: "Acceuil",
        path: '/'
    },
    {
        name: "Societe",
        path: '/Societe'

    },
    {
        name: "Services",
        path: '/Services'
    },
    {
        name: "Careers",
        path: '/Careers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]

export const servicess = [
    {
        id:1,
        icon:<BsFillAirplaneFill />,
        title:"CONSULTING",
        info:"La transformation numérique des entreprises vers les outils collaboratifs et services de la suite Office 365 est dorénavant une réalité et suscite beaucoup d’attentes avec l’accélération des déploiements d’applications métiers dans le cloud. Nous vous accompagnons à cette transformation digitale!           ",
        path:'/services'

    },
    {
        id:2,
        icon:<BsFillSendFill />,
        title:"SOUS TRAITANCE",
        info:"Plusieurs ESN partenaires en Europe ont fait confiance à PROGED grâce à l’expertise et la qualité de ses collaborateurs.       Aujourd’hui, les entreprises expertes en développement informatique peuvent avoir besoin d’un partenaire de confiance.",
        path:'/services'
    },
    {
        id:3,
        icon:<ImCheckmark />,
        title:"EDITION",
        info:"L’édition met en exergue l’expérience et les bonnes pratiques de développement pour faire du développement de qualité. Au-delà d’une méthode, c’est avant tout une philosophie, une culture des développeurs. Chez PROGED, nous partageons les attributs de ce mouvement, qui d’ailleurs s’inscrit dans nos valeurs.",
        path:'/services'
    },
    {
        id:4,
        icon:<AiTwotoneCustomerService />,
        title:"SUPPORT",
        info:"Bénéficier de solutions Saas dans le cloud n’est pas suffisant pour vous  « libérer » à 100% de votre informatique: il faut les administrer. Grâce aux services de supports de PROGED SOLUTIONS, concentrez-vous sur votre activité et vos équipes, nous nous chargeons du reste.",
        path:'/services'
    },
]

export const quechezV = [
    {
        id:1,
        title:"Faites des économies sur les coûts de maintenance de vos applications",
        desc:"Grâce à nos centres de services offshore nous proposons des tarifs très compétitifs. Nous vous aidons à contrôler efficacement les coûts de vos projets. L'utilisation d'outils collaboratifs permet un suivi en temps réel de vos demandes et de l'état de celles-ci.",      

    },
    {
        id:2,
        title:"Confiez-nous la maintenance de vos applications et restez concentré sur votre cœur de métier.",
        desc:"Nos développeurs reprennent votre projet en travaillant de manière indépendante et autonome tout en gardant un contact quotidien avec vos équipes. Cela permet de concentrer les forces de vos équipes sur des tâches à plus fortes valeurs ajoutées.",
    },
    {
        id:3,    
        title:"Maitrisez vos pics d'activité et renforcez votre croissance.",
        desc:"Travailler avec nous vous donne accès à un large choix de technologies tout en étant accompagné par nos experts techniques. Nous fournissons un environnement de travail complet axé sur l'efficacité et la communication.",
        
    }  
]
export const testimonials = [
    {
        id:1,
        name:"TARAK ZAHAF",
        job:"Expert comptable,Produit",        
        quote:"Nous ne voyons pas en PROGED, un simple prestataire de service. Il s’agit plus d’un partenaire, qui nous accompagne depuis plus de 10 ans dans nos démarches d’amélioration de nos procédures pour mieux servir nos clients.Durant ces longues années de collaboration, toute l’équipe de PROGED, a su répondre au mieux à l’évolution de nos besoins et nous a prodigué les meilleures solutions adaptées à notre taille et au meilleur coût.",
        avatar:require("./images/Taarak-ZEHAF-40x40_c.jpg")   


    },
    {
        id:2,
        name:"JACQUES SERRE ",
        job:"C.E.O, TakeLead",        
        quote:"Nous faisons travailler la société PROGED depuis de nombreuses années sur différents projets de développement qui nécessitent un vrai savoir-faire ainsi qu’une réactivité sans faille. Les Equipes de PROGED ont toujours été présentes et compétentes; aussi bien en terme de qualité du travail fourni, qu’en terme de réactivité, d’implication et également, ce qui est primordial, en terme de conseil. Cette société nous accompagne toujours dans différents domaines comme le suivi de nos développements informatiques, mais également sur des applications convexes. ",
        avatar:require("./images/Jacques-SERRE-40x40_c.jpg")  
    },
    {
        id:3,
        name:"WAJDI MAKNI",
        job:"IT Manger, HamilaDutyFree",
        quote:"Personnellement, je suis entièrement satisfait en terme de collaboration avec PROGED. Qui dit PROGED dit sérieux, discrétion, et initiative intelligente.  ",
        avatar:require("./images/Wajdi-Mekni-40x40_c.jpg")  
    }, 
]
