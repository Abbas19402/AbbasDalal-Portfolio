import { StaticImageData } from "next/image"
import Netflix from '../../public/Assets/Images/Projects/Netflix.png'
import Revella from '../../public/Assets/Images/Projects/Revella.png'

const ProjectsArray: { key: Number , title: String , image: StaticImageData , shortDesc: String , description: {point: String}[] , techUsed: {}[] , gradient: { From: String , Via: String , To: String }}[] = [
    {
        key: 1,
        title: 'Netflix Clone',
        image: Netflix,
        shortDesc: 'A Simple Netflix clone for Mobile',
        description: [
            { point: 'Netflix Clone' },
            { point: 'Netflix Clone' },
            { point: 'Netflix Clone' },
            { point: 'Netflix Clone' }
        ],
        techUsed: [
            'React Native',
            'Redux.Js',
            'TMDB Movies Database'
        ],
        gradient:{
            From: 'rose-400',
            Via: 'red-300',
            To: 'orange-300'
        }
    },
    {
        key: 2,
        title: 'Revella',
        image: Revella,
        shortDesc: 'A Fashion Ecommerce Website',
        description: [
            { point: 'Revella' },
            { point: 'Revella' },
            { point: 'Revella' },
            { point: 'Revella' }
        ],
        techUsed: [
            'React',
            'Redux.Js',
            'Tailwind'
        ],
        gradient: {
            // bg-gradient-to-r from-yellow-200 via-green-200 to-green-500
            From: 'yellow-200',
            Via: 'green-200',
            To: 'green-500'
        }
    }
]

export default ProjectsArray