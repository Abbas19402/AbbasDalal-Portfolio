import { StaticImageData } from "next/image"
import C from "../../public/Assets/Images/Skills/C.png"
import CPlusPlus from "../../public/Assets/Images/Skills/c++.png"
import Flutter from "../../public/Assets/Images/Skills/flutter.png"
import Dart from "../../public/Assets/Images/Skills/dart.png"
import Express from "../../public/Assets/Images/Skills/express.png"
import Java from "../../public/Assets/Images/Skills/java.png"
import NextJS from "../../public/Assets/Images/Skills/nextjs.png"
import NodeJS from "../../public/Assets/Images/Skills/nodejs.png"
import React from "../../public/Assets/Images/Skills/physics.png"
import MongoDB from "../../public/Assets/Images/Skills/mongodb.png"
import Typescript from "../../public/Assets/Images/Skills/typescript.png"
import SpringBoot from "../../public/Assets/Images/Skills/springboot.png"

const SkillsArray :{ key: Number , value: String , image: StaticImageData, type: String }[] = [
    {
        key: 3,
        value: 'TypeScript',
        image: Typescript,
        type: 'programming'
    },
    {
        key: 4,
        value: 'Dart',
        image: Dart,
        type: 'programming'
    },

    {
        key: 5,
        value: 'Java',
        image: Java,
        type: 'programming'
    },
    {
        key: 6,
        value: 'React',
        image: React,
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
        value: 'Flutter',
        image: Flutter,
        type: 'frontend'
    },
    {
        key: 9,
        value: 'Express',
        image: Express,
        type: 'backend'
    },
    {
        key: 10,
        value: 'MongoDB',
        image: MongoDB,
        type: 'backend'
    },
    {
        key: 11,
        value: 'NodeJS',
        image: NodeJS,
        type: 'backend'
    },
    {
        key: 12,
        value: 'Springboot',
        image: SpringBoot,
        type: 'backend'
    },
    {
        key: 13,
        value: "React Native",
        image: React,
        type: "frontend"
    }
]

export default SkillsArray