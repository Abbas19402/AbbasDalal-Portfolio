import { StaticImageData } from "next/image"
import C from "../../public/Assets/Images/Skills/C.png"
import CPlusPlus from "../../public/Assets/Images/Skills/c++.png"
import HTML from "../../public/Assets/Images/Skills/html.png"
import CSS from "../../public/Assets/Images/Skills/css-3.png"
import Express from "../../public/Assets/Images/Skills/express.png"
import JS from "../../public/Assets/Images/Skills/Javascript.png"
import NextJS from "../../public/Assets/Images/Skills/nextjs.png"
import NodeJS from "../../public/Assets/Images/Skills/nodejs.png"
import Physics from "../../public/Assets/Images/Skills/physics.png"
import MongoDB from "../../public/Assets/Images/Skills/mongodb.png"
import Typescript from "../../public/Assets/Images/Skills/typescript.png"

const SkillsArray :{ key: Number , value: String , image: StaticImageData, type: String }[] = [
    {
        key: 1 ,
        value: 'C',
        image: C,
        type: 'programming'
    },
    {
        key: 1 ,
        value: 'C++',
        image: CPlusPlus,
        type: 'programming'
    },
    {
        key: 2 ,
        value: 'HTML',
        image: HTML,
        type: 'frontend'
    },
    {
        key: 3,
        value: 'CSS',
        image: CSS,
        type: 'frontend'
    },
    {
        key: 4,
        value: 'JavaScript',
        image: JS,
        type: 'frontend'
    },
    {
        key: 5,
        value: 'TypeScript',
        image: Typescript,
        type: 'frontend'
    },
    {
        key: 6,
        value: 'React',
        image: Physics,
        type: 'frontend'
    },
    {
        key: 7,
        value: 'NextJS',
        image: NextJS,
        type: 'frontend'
    },
    {
        key: 8,
        value: 'Express',
        image: Express,
        type: 'backend'
    },
    {
        key: 9,
        value: 'MongoDB',
        image: MongoDB,
        type: 'backend'
    },
    {
        key: 10,
        value: 'NodeJS',
        image: NodeJS,
        type: 'backend'
    },
]

export default SkillsArray