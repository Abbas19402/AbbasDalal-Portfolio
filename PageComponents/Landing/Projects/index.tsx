import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useEffect } from "react";
import ProjectsArray from "../../../Constants/Projects";
import Heading from "../../../Components/Typography/Heading";
import Image from "next/image";
import Link from "next/link";

const Projects: NextPage<ScriptProps> = () => {
    useEffect(()=> {},[ProjectsArray])
    const isTwo = ProjectsArray.length === 2;
    return(
        <section className="w-full min-h-screen flex flex-col items-center py-24 px-4">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
                <Heading heading={'Projects'} />
                {isTwo ? (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ProjectsArray.map((item, key) => (
                            <div key={key} className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl border border-white/10 flex flex-col h-full">
                                <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                                    <Image 
                                        src={item.imageSrc?.src}
                                        alt={`${item.title}`}
                                        fill
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between p-8">
                                    <div>
                                        <div className="font-bold text-2xl md:text-3xl text-indigo-200 mb-2 tracking-wide">{item.title}</div>
                                        <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-4">{item.description[0]?.point}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.techUsed.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 text-xs font-medium text-white bg-indigo-500/20 rounded-full border border-indigo-400/30">{tech.value}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-end w-full mt-2">
                                        <Link href={`${item.github}`} target="_blank" rel="noopener noreferrer" className="bg-indigo-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition-colors duration-300 hover:cursor-pointer">View on GitHub</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Featured Project */}
                        <div className="lg:col-span-2 row-span-2 bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl border border-white/10 flex flex-col h-full">
                            <div className="relative w-full h-64 md:h-96 rounded-t-2xl overflow-hidden">
                                <Image 
                                    src={ProjectsArray[0].imageSrc?.src}
                                    alt={`${ProjectsArray[0].title}`}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between p-8">
                                <div>
                                    <div className="font-bold text-2xl md:text-3xl text-indigo-200 mb-2 tracking-wide">{ProjectsArray[0].title}</div>
                                    <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-4">{ProjectsArray[0].description[0]?.point}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {ProjectsArray[0].techUsed.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs font-medium text-white bg-indigo-500/20 rounded-full border border-indigo-400/30">{tech.value}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-end w-full mt-2">
                                    <Link href={`${ProjectsArray[0].github}`} target="_blank" rel="noopener noreferrer" className="bg-indigo-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition-colors duration-300 hover:cursor-pointer">View on GitHub</Link>
                                </div>
                            </div>
                        </div>
                        {/* Smaller Projects */}
                        <div className="flex flex-col gap-8">
                            {ProjectsArray.slice(1).map((item, key) => (
                                <div key={key} className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl border border-white/10 flex flex-col h-full">
                                    <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
                                        <Image 
                                            src={item.imageSrc?.src}
                                            alt={`${item.title}`}
                                            fill
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between p-6">
                                        <div>
                                            <div className="font-bold text-lg text-indigo-200 mb-1 tracking-wide truncate">{item.title}</div>
                                            <p className="text-white/80 text-sm font-light leading-relaxed mb-3 line-clamp-3">{item.description[0]?.point}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {item.techUsed.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs font-medium text-white bg-indigo-500/20 rounded-full border border-indigo-400/30">{tech.value}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-end w-full mt-2">
                                            <Link href={`${item.github}`} target="_blank" rel="noopener noreferrer" className="bg-indigo-400 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-indigo-500 transition-colors duration-300 hover:cursor-pointer text-xs">View on GitHub</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects