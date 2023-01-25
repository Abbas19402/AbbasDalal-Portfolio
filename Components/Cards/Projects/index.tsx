import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props {
    gradientFrom: String,
    gradientVia: String,
    gradientTo: String,
    title: String,
    description: {point: String}[],
    shortDesc: String,
    imageSrc: StaticImageData,
    techUsed: {}[]
}

const ProjectCard: React.FC<Props> = ({ gradientFrom , gradientVia , gradientTo , description , shortDesc ,imageSrc , techUsed ,title }) => {
    useEffect(()=> {},[gradientFrom , gradientVia , gradientTo])
    return(
        <div className="relative h-[70vh] w-[60vw] rounded-tl-2xl rounded-br-2xl">
            <div className={`absolute bg-gradient-to-tl from-${gradientFrom} via-${gradientVia} to-${gradientTo} rounded-tl-2xl h-48 w-48 overflow-hidden z-0`}>
                <div className="w-full translate-x-1 translate-y-1 h-full bg-black rounded-tl-2xl"></div>
            </div>
            <div className={`absolute bottom-0 right-0 bg-gradient-to-tl from-${gradientFrom} via-${gradientVia} to-${gradientTo} rounded-br-2xl h-48 w-48 overflow-hidden z-0`}>
                <div className="w-full h-full -translate-x-1 -translate-y-1 bg-black rounded-br-2xl"></div>
            </div>
            <div className="z-10 relative w-full h-full p-5">
                <div className="w-full h-full flex flex-row justify-between items-center">
                    <div className="w-[60%] h-full p-2 flex flex-col">
                        <div className="w-full h-[40%] p-5 flex flex-col justify-evenly items-start">
                            <div className={`w-full bg-gradient-to-br from-${gradientFrom} to-${gradientTo} bg-clip-text`}>
                                <span className="text-5xl text-transparent">{title}</span>
                            </div>
                            <div className="w-full">
                                <span className="text-xl text-white">{shortDesc}</span>
                            </div>
                        </div>
                        <div className="w-full h-[60%] px-5 flex flex-col justify-center items-center">
                            <ul className="list-disc">
                                {description.map((item,index) => (
                                    <li key={index} className="list-disc">
                                        <span className="text-white text-sm">{item.point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-[40%] h-full  p-2 flex flex-col gap-2">
                        <div className="w-full h-[50%] relative">
                            <Image alt={"String"} src={imageSrc.src} fill={true}/>
                        </div>
                        <div className="w-full h-[50%] ">
                            {techUsed.map((item,index)=> (
                                <div >

                                </div>
                            ))}     
                        </div>
                    </div>
                </div>
            </div>
            
        </div> 
    )
}

export default ProjectCard