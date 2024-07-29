import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useEffect } from "react";
import Cards from "../../../Components/Cards";
import ProjectsArray from "../../../Constants/Projects";

const Projects: NextPage<ScriptProps> = () => {
    useEffect(()=> {},[ProjectsArray])
    return(
        <div className="w-full h-fit relative overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full p-2 text-center">
                    <span className="text-white text-6xl tracking-tight font-extrabold">Projects</span>
                </div>
                {ProjectsArray.map((item,key) => (
                    <div className="my-16 w-full px-10 lg:px-40">
                        <Cards.ProjectCard
                            key={key}
                            gradient={item.gradient}
                            title={item.title}
                            description={item.description}  
                            shortDesc={item.shortDesc}
                            techUsed={item.techUsed}
                            github={item.github}
                            imageSrc={item.imageSrc}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects