import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    gradient: {From: String, Via: String, To: String},
    title: String,
    description: {point: String}[],
    shortDesc: String
    techUsed: {type: String , value: String}[],
    github: String,
    imageSrc: StaticImageData
}

const ProjectCard: React.FC<Props> = ({ gradient, description , shortDesc , techUsed ,title , github, imageSrc }) => {
    console.log(gradient)
    return(
        <div className="flex flex-col justify-between items-center">
            <div className="rounded-[16px] bg-black flex flex-col lg:flex-row gap-10 justify-between items-start mx-auto transition-all duration-700 w-full h-[80%]">
                    <div className="w-full flex flex-col lg:flex-row justify-between items-center h-full py-2">
                        <div className="h-full flex flex-col justify-between items-center ">
                            <div className="flex md:flex-row flex-col justify-between lg:items-center w-full">
                                <div className={`bg-gradient-to-r from-${gradient.From} via-${gradient.Via} to-${gradient.To} bg-clip-text mb-2`}>
                                    <span className="text-4xl text-transparent font-extrabold">{title}</span>
                                </div>
                                /
                            </div>
                            <div className="w-full text-md font-semibold text-justify">
                                <span className="text-white/80 text-lg tracking-wide">{description[0].point}</span>
                            </div>
                        </div>
                    </div>
                
                <div className="relative w-full lg:w-[90vw] h-[25vh] lg:h-[50vh] rounded-lg lg:rounded-3xl overflow-hidden">
                    <Image 
                        src={imageSrc?.src}
                        alt={`${title}`}
                        layout="fill"
                    />
                </div>
            </div> 
            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 my-5">
                <div className="h-full md:flex justify-end items-end group border rounded-md">
                    <Link href={`${github}`} target={`_blank`}>
                        <div className={`bg-transparent rounded py-0.5 px-3 transition-all group-hover:bg-slate-300 duration-700 group`}>
                            <span className="text-lg font-medium text-white group-hover:text-black tracking-widest transition-all duration-700">Github</span>
                        </div>
                    </Link>
                </div>
                <div className="h-fit py-2">
                    <div className="h-fit w-fit flex flex-row flex-wrap gap-7 justify-start items-center my-1">
                        {techUsed.map((item,index)=> (
                            <div key={index} className={`bg-slate-800 py-0.5 px-2 rounded-full`}>
                                <span className="text-sm font-medium text-white tracking-widest">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard