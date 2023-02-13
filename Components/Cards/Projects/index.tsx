import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../../Buttons/Common/common_button";
import Link from "next/link"
interface Props {
    gradient: {From: String, Via: String, To: String},
    title: String,
    description: {point: String}[],
    shortDesc: String,
    imageSrc: StaticImageData,
    techUsed: {type: String , value: String}[],
    github: String
}

const ProjectCard: React.FC<Props> = ({ gradient, description , shortDesc ,imageSrc , techUsed ,title , github}) => {
    return(
        <div className="relative lg:min-h-[70vh] w-[90vw] md:w-[80vw] lg:w-[60vw] rounded-tl-2xl rounded-br-2xl my-5">
            <div className={`z-10 relative w-full h-full rounded-xl overflow-hidden p-1 bg-gradient-to-tl from-${gradient.From} via-${gradient.Via} to-${gradient.To}`}>
                <div className="w-full h-full flex flex-col lg:flex-row bg-black p-5 rounded-xl">
                    <div className="w-full lg:w-[60%] h-full p-2 flex flex-col ">
                        <div className="w-full h-[40%] p-2 lg:p-5 flex flex-col justify-evenly items-start">
                            <div className="w-full flex flex-col md:flex-row justify-between items-center">
                                <div className={`w-full bg-gradient-to-br from-${gradient.From} to-${gradient.To} bg-clip-text`}>
                                    <span className="text-5xl text-transparent">{title}</span>
                                </div>
                                <div className="w-full h-full p-2 hidden md:flex justify-end items-end">
                                    <Link href={`${github}`} target={`_blank`}>
                                        <Button Title={'Github'}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full">
                                <span className="text-xl text-white">{shortDesc}</span>
                            </div>
                            <div className="w-full h-fit lg:hidden p-2 flex justify-start md:justify-center items-center">
                                <Link href={`${github}`} target={`_blank`}>
                                    <Button Title={'Github'}/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-[60%] px-2 lg:px-5 flex flex-col justify-center items-center">
                            <ul className="list-disc">
                                {description.map((item,index) => (
                                    <li key={index} className="list-disc my-3">
                                        <span className="text-white text-sm tracking-tight">{item.point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[40%] p-2 flex flex-col justify-between items-center gap-2">
                        <div className="w-full h-[50%] flex flex-col justify-around items-center">
                            <div className="flex flex-col mb-auto mt-2 mx-2">
                                <div className="h-fit w-fit flex flex-row flex-wrap gap-7 justify-start items-center">
                                    {techUsed.map((item,index)=> (
                                        <div className={`bg-gradient-to-br from-${gradient.From} to-${gradient.To} py-0.5 px-1 rounded`}>
                                            <span className="text-lg font-medium text-black">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>     
                        </div>
                        <div className="hidden lg:block w-full aspect-square">
                            <div className="relative w-full h-full">
                                <Image alt={"String"} src={imageSrc.src} fill={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProjectCard