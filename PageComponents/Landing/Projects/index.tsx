import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useEffect } from "react";
import Cards from "../../../Components/Cards";
import ProjectsArray from "../../../Constants/Projects";
import Gradients from "../../../Components/Cards/Projects/randomGradientsGenerator";

const Projects: NextPage<ScriptProps> = () => {
    useEffect(()=> {},[ProjectsArray])
    return(
        <div className="w-full h-screen">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full p-2 text-center">
                    <span className="text-white text-6xl font-extrabold tracking-widest">My Work</span>
                </div>
                {ProjectsArray.map((item,key) => (
                    <Cards.ProjectCard
                        key={key}
                        gradient={item.gradient}
                        title={item.title}
                        imageSrc={item.image}
                        description={item.description}  
                        shortDesc={item.shortDesc}
                        techUsed={item.techUsed}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects