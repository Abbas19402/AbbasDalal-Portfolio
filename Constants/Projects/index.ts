import { StaticImageData } from "next/image"
import Netflix from '../../public/Assets/Images/Projects/Netflix.png'
import Revella from '../../public/Assets/Images/Projects/Revella.png'

const ProjectsArray: { key: Number , title: String , image: StaticImageData , shortDesc: String , description: {point: String}[] , techUsed: {type: String , value: String}[] , gradient: { From: String , Via: String , To: String } , github: String}[] = [
    {
        key: 1,
        title: 'Netflix Clone',
        image: Netflix,
        shortDesc: 'A Simple Netflix clone for Mobile',
        description: [
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' },
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' },
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' },
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' }
        ],
        techUsed: [
            {
                type: 'Framework',
                value: 'React Native'
            },
            {
                type: 'Library',
                value: 'Redux.Js'
            },
            {
                type: 'Database',
                value: 'TMDB Movies Database'
            },
            {
                type: 'Language',
                value: 'Javascript'
            }
        ],
        gradient:{
            From: 'rose-400',
            Via: 'red-300',
            To: 'orange-300'
        },
        github: 'https://github.com/Abbas19402/Netflix-Clone'
    },
    {
        key: 2,
        title: 'Revella',
        image: Revella,
        shortDesc: 'A Fashion Ecommerce Website',
        description: [
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' },
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' },
            { point: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?' },
            { point: 'ReveLorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus expedita similique veniam fugit dolorum omnis quo voluptatibus iure tempora?lla' }
        ],
        techUsed: [
            {
                type: 'Framework',
                value: 'React'
            },
            {
                type: 'Library',
                value: 'Redux.Js'
            },
            {
                type: 'CSS Library',
                value: 'Tailwind CSS'
            },
            {
                type: 'Language',
                value: 'Javascript'
            }
        ],
        gradient: {
            // bg-gradient-to-r from-yellow-200 via-green-200 to-green-500
            From: 'yellow-200',
            Via: 'green-200',
            To: 'green-500'
        },
        github: 'https://github.com/Abbas19402/Revella'
    }
]

export default ProjectsArray