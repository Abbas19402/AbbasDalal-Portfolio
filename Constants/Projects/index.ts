import { StaticImageData } from "next/image"
import Netflix from '../../public/Assets/Images/Projects/Netflix.png'
import Revella from '../../public/Assets/Images/Projects/Revella.png'

const ProjectsArray: { key: Number , title: String , image: StaticImageData , shortDesc: String , description: {point: String}[] , techUsed: {}[] , gradientFrom : String , gradientTo : String , gradientVia : String }[] = [
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
        gradientFrom: 'sky-300',
        gradientVia: 'sky-300/80',
        gradientTo: 'rose-700',
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
        gradientFrom: 'sky-300',
        gradientVia: 'sky-300/80',
        gradientTo: 'amber-700',
    }
]

export default ProjectsArray