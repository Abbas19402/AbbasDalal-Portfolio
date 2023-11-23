import { StaticImageData } from "next/image"
import Netflix from '../../public/Assets/Images/Projects/Netflix.png'
import Revella from '../../public/Assets/Images/Projects/Revella.png'

const ProjectsArray: { key: Number , title: String  , shortDesc: String , description: {point: String}[] , techUsed: {type: String , value: String}[] , gradient: { From: String , Via: String , To: String } , github: String}[] = [
    {
        key: 1,
        title: 'SkyHive',
        shortDesc: 'A flight booking website',
        description: [
            { point: `SkyHive is a cutting-edge flight booking website developed with Next.js and Tailwind CSS, featuring a secure Node.js backend powered by MongoDB. Leveraging libraries like bcrypt and JWT, it ensures robust authentication and data protection. Experience seamless travel planning with SkyHive's intuitive interface and advanced technology.` }
        ],
        techUsed: [
            {
                type: 'Framework',
                value: 'Next.JS'
            },
            {
                type: 'Library',
                value: 'Redux.Js'
            },
            {
                type: 'CSS Framework',
                value: 'Tailwind CSS'
            },
            {
                type: 'Backend',
                value: 'Nodejs'
            },
            {
                type: 'Database',
                value: 'MongoDB'
            },
        ],
        gradient:{
            From: 'rose-400',
            Via: 'red-300',
            To: 'orange-300'
        },
        github: 'https://github.com/Abbas19402/SkyHive'
    },
    {
        key: 2,
        title: 'MLSU Student App',
        shortDesc: 'An application for students of Mohanlal Sukhadia University',
        description: [
            { point: `Revolutionize the Mohanlal Sukhadia University student experience with our bespoke mobile app crafted on React Native and Redux. The Node.js backend, fortified with MongoDB, bcrypt, and JWT, ensures robust security. Tailored for Mohanlal Sukhadia University, this app seamlessly integrates with campus resources, offering students a unique and intuitive interface for academic success.` }
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
                type: 'Backend',
                value: 'Nodejs'
            },
            {
                type: 'Database',
                value: 'MongoDB'
            },
        ],
        gradient: {
            // bg-gradient-to-r from-yellow-200 via-green-200 to-green-500
            From: 'yellow-200',
            Via: 'green-200',
            To: 'green-500'
        },
        github: 'https://github.com/Abbas19402/MLSU-App'
    }
]

export default ProjectsArray