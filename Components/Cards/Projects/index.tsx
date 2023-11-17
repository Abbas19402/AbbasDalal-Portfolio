import React from "react";
import Link from "next/link"
import { StaticImageData } from "next/image";

interface Props {
    gradient: {From: String, Via: String, To: String},
    title: String,
    description: {point: String}[],
    shortDesc: String,
    imageSrc: StaticImageData,
    techUsed: {type: String , value: String}[],
    github: String
}

const ProjectCard: React.FC<Props> = ({ gradient, description , shortDesc ,imageSrc , techUsed ,title , github }) => {
    return(
        <div className="w-full md:w-[75%] h-fit rounded-[16px] bg-black flex flex-col justify-between items-start mx-auto group">
            <div className="transition-all duration-700 w-full h-[80%] rounded-t-[16px] bg-white/10 ">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center h-full px-4 py-2">
                    <div className=" h-full flex flex-col justify-between items-center">
                        <div className="flex md:flex-row flex-col justify-between items-center w-full">
                            <div className={`bg-gradient-to-br from-${gradient.From} to-${gradient.To} bg-clip-text`}>
                                <span className="text-5xl text-transparent">{title}</span>
                            </div>
                            <div className="h-full md:flex justify-end items-end">
                                <Link href={`${github}`} target={`_blank`}>
                                    <div className={`bg-transparent rounded py-0.5 px-3 transition-all hover:bg-slate-300 duration-700 group`}>
                                        <span className="text-lg font-medium text-white tracking-widest transition-all duration-700">Github</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full text-md font-semibold">
                            <span className="text-white text-sm tracking-tight">{description[0].point}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit rounded-b-[16px] p-4  ">
                <div className="h-fit w-fit flex flex-row flex-wrap gap-7 justify-start items-center my-1">
                    {techUsed.map((item,index)=> (
                        <div key={index} className={`bg-slate-300 px-1 rounded`}>
                            <span className="text-lg font-semibold text-black tracking-wide">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    )
}

export default ProjectCard