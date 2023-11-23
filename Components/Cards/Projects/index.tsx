import React from "react";
import Link from "next/link"
import { StaticImageData } from "next/image";

interface Props {
    gradient: {From: String, Via: String, To: String},
    title: String,
    description: {point: String}[],
    shortDesc: String
    techUsed: {type: String , value: String}[],
    github: String
}

const ProjectCard: React.FC<Props> = ({ gradient, description , shortDesc , techUsed ,title , github }) => {
    return(
        <div className="w-full md:w-[75%] h-fit rounded-[16px] bg-black flex flex-col justify-between items-start mx-auto">
            <div className="transition-all duration-700 w-full h-[80%] rounded-[16px] bg-white/10 ">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center h-full px-4 py-2">
                    <div className=" h-full flex flex-col justify-between items-center">
                        <div className="flex md:flex-row flex-col justify-between items-center w-full">
                            <div className={`bg-white bg-clip-text mb-2`}>
                                <span className="text-5xl text-transparent font-extrabold">{title}</span>
                            </div>
                            <div className="h-full md:flex justify-end items-end group border rounded-md">
                                <Link href={`${github}`} target={`_blank`}>
                                    <div className={`bg-transparent rounded py-0.5 px-3 transition-all group-hover:bg-slate-300 duration-700 group`}>
                                        <span className="text-lg font-medium text-white group-hover:text-black tracking-widest transition-all duration-700">Github</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full text-md font-semibold">
                            <span className="text-white/80 text-sm tracking-wide font-thin">{description[0].point}</span>
                        </div>
                        <div className="w-full h-fit py-2">
                            <div className="h-fit w-fit flex flex-row flex-wrap gap-7 justify-start items-center my-1">
                                {techUsed.map((item,index)=> (
                                    <div key={index} className={`bg-slate-300 px-1 rounded`}>
                                        <span className="text-lg font-semibold text-black tracking-wide">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProjectCard