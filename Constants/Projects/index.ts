import { StaticImageData } from "next/image"
import Skyhive from "../../public/Assets/Images/Projects/project_skyhive.png"
import BillingMS from "../../public/Assets/Images/Projects/project_bms.png"

const ProjectsArray: { key: Number , title: String  , shortDesc: String , description: {point: String}[] , techUsed: {type: String , value: String}[] , gradient: { From: String , Via: String , To: String } , github: String, imageSrc: StaticImageData}[] = [
    {
        key: 1,
        title: 'SkyHive',
        shortDesc: 'A flight booking website',
        description: [
            { point: `SkyHive is a cutting-edge flight booking website developed with Next.js and Tailwind CSS, featuring a secure Node.js backend powered by MongoDB. Leveraging libraries like bcrypt and JWT, it ensures robust authentication and data protection. Experience seamless travel planning with SkyHive's intuitive interface and advanced technology` }
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
        github: 'https://github.com/Abbas19402/SkyHive',
        imageSrc: Skyhive
    },
    {
        key: 2,
        title: 'Billing Management System',
        shortDesc: 'A billing management system for a small business',
        description: [
            { point: `The Billing Management System is a project tailored for small businesses to streamline billing processes. It incorporates secure authentication. Features include generating, managing and tracking invoices and clients. Developed with modern web technologies, offers a user-friendly interface. Additionally, it provides detailed financial reports. It exemplifies efficient and secure billing management for small businesses` }
        ],
        techUsed: [
            {
                type: 'Framework',
                value: 'Next.JS'
            },
            {
                type: 'Library',
                value: 'React'
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
        gradient: {
            // bg-gradient-to-r from-yellow-200 via-green-200 to-green-500
            From: 'yellow-200',
            Via: 'green-200',
            To: 'green-500'
        },
        github: 'https://github.com/Abbas19402/MLSU-App',
        imageSrc: BillingMS
    }
]

export default ProjectsArray