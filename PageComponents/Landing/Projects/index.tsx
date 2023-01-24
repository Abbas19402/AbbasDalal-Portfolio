import type { NextPage } from "next";
import { ScriptProps } from "next/script";

const Projects: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full h-screen">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full p-2 text-center">
                    <span className="text-white text-6xl font-extrabold tracking-widest">My Work</span>
                </div>
                <div className="relative h-[70vh] w-[60vw] rounded-tl-2xl rounded-br-2xl">
                    <div className="absolute bg-gradient-to-tl from-sky-300 via-sky-300/80 to-rose-700/80 rounded-tl-2xl h-48 w-48 overflow-hidden z-0">
                        <div className="w-full translate-x-1 translate-y-1 h-full bg-black rounded-tl-2xl"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-gradient-to-tl from-sky-300 via-rose-400 to-rose-700/80 rounded-br-2xl h-48 w-48 overflow-hidden z-0">
                        <div className="w-full -translate-x-1 -translate-y-1 h-full bg-black rounded-br-2xl"></div>
                    </div>
                    <div className="z-10 relative w-full h-full p-5">
                        <div className="w-full h-full flex flex-row justify-between items-center border">
                            <div className="w-[60%] h-full border p-2 flex flex-col gap-2">
                                <div className="w-full h-[40%] border"></div>
                                <div className="wi-full h-[60%] border"></div>
                            </div>
                            <div className="w-[40%] h-full border p-2 flex flex-col gap-2">
                                <div className="w-full h-[50%] border">

                                </div>
                                <div className="w-full h-[50%] border">

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
    )
}

export default Projects