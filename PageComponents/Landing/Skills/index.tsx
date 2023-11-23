import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";

import SkillsArray from "../../../Constants/Skills/Skills";

const Skills: NextPage<ScriptProps> = () => {
    console.log(SkillsArray[0].image)
    
    return(
        <div className="w-full md:w-[70vw] h-full flex flex-col mx-auto justify-center items-center">
            <div className={`my-5 text-center`}>
                <span className="text-white text-6xl tracking-wider">Skills</span>
            </div>
            <div className="w-fit max-w-[80%] lg:max-w-[70vw] h-fit flex flex-row justify-center items-center gap-3 overflow-hidden flex-wrap ">
            {SkillsArray.map((icon , key) => (
                <div key={key} className="h-30 w-30 flex flex-col justify-center items-center rounded-tl-2xl p-2 m-4">
                    <div className="h-20 w-20 flex items-center justify-center relative rounded-lg overflow-hidden">
                        <Image alt={`${icon.value}`} src={`${icon.image.src}`} fill={true}/>
                    </div>
                    <div className="my-4 font-semibold w-full text-center rounded-md px-2 bg-zinc-800 shadow-2xl shadow-black">
                        <span className="text-xl tracking-wider text-white font-thin">{icon.value}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Skills