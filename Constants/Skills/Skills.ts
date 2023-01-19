import { StaticImageData } from "next/image"
import C from "../../public/Assets/Images/Skills/letter-c.png"
import CPlusPlus from "../../public/Assets/Images/Skills/c++.png"
import HTML from "../../public/Assets/Images/Skills/html.png"
import CSS from "../../public/Assets/Images/Skills/css-3.png"
import Express from "../../public/Assets/Images/Skills/express.png"
import JS from "../../public/Assets/Images/Skills/java-script.png"
import NextJS from "../../public/Assets/Images/Skills/nextjs.png"
import NodeJS from "../../public/Assets/Images/Skills/nodejs.png"
import Physics from "../../public/Assets/Images/Skills/physics.png"
import MongoDB from "../../public/Assets/Images/Skills/mongodb.png"
import ReactNative from "../../public/Assets/Images/Skills/react_native.png"
import Typescript from "../../public/Assets/Images/Skills/typescript.png"

const SkillsArray :{ key: Number , value: String , image: StaticImageData }[] = [
    {
        key: 1 ,
        value: 'C',
        image: C
    },
    {
        key: 1 ,
        value: 'C++',
        image: CPlusPlus
    },
    {
        key: 2 ,
        value: 'HTML',
        image: HTML
    },
    {
        key: 3,
        value: 'CSS',
        image: CSS
    },
    {
        key: 4,
        value: 'JavaScript',
        image: JS
    },
    {
        key: 5,
        value: 'TypeScript',
        image: Typescript
    },
    {
        key: 6,
        value: 'React',
        image: Physics
    },
    {
        key: 7,
        value: 'NextJS',
        image: NextJS
    },
    {
        key: 8,
        value: 'Express',
        image: Express
    },
    {
        key: 9,
        value: 'MongoDB',
        image: MongoDB
    },
    {
        key: 10,
        value: 'NodeJS',
        image: NodeJS
    },
]

export default SkillsArray