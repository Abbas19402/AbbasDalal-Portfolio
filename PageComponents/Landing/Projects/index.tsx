import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useEffect } from "react";
import Cards from "../../../Components/Cards";
import ProjectsArray from "../../../Constants/Projects";
import Heading from "../../../Components/Typography/Heading";

const Projects: NextPage<ScriptProps> = () => {
    useEffect(()=> {},[ProjectsArray])
    return(
        <div className="w-full h-fit relative overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Heading heading={'Projects'} />
                {ProjectsArray.map((item,key) => (
                    <div key={key} className="my-16 w-full px-10 lg:px-40">
                        <Cards.ProjectCard
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