import type { NextPage } from "next";

import { ScriptProps } from "next/script";
import { Neucha } from '@next/font/google';
import { useLottie } from 'lottie-react'
import { useSelector } from "react-redux";

import CodeAnimation from '../../../public/Assets/Animations/Code4.json'
import { RootState } from "../../../redux/Store";

const neucha = Neucha({
  subsets: ['latin'],
  weight: '400'
})

const Introduction: NextPage<ScriptProps> = () => {
    const sidebarStatus = useSelector<RootState , Boolean>(state => state.transitions.sidebarStatus);
    const option = {
        animationData: CodeAnimation,
        loop: true
    }
    const { View:LottieAnimation } = useLottie(option);
    return (
        <div className="w-full h-screen flex flex-col-reverse lg:flex-row justify-evenly items-center">
            <div className={`flex flex-col justify-center items-start ${!sidebarStatus ? 'w-full md:w-[80%] lg:w-[60%]' : 'w-full'} h-fit lg:h-[80%] mb-20 md:mb-14 lg:mb-0 p-3 lg:p-10`}>
                <div className="flex flex-row my-4 w-full lg:w-[80%] justify-start">
                    <div className="flex flex-col gap-y-10 w-full text-center lg:text-start">
                        <span className="text-4xl md:text-5xl lg:text-6xl text-slate-200 mx-2 font-semibold lg:font-normal">
                            Hey,
                        </span>
                    
                        <div className="flex flex-row justify-center lg:justify-start lg:items-end font-semibold bg-clip-text bg-gradient-to-r to-sky-800 from-slate-400 transition-all duration-500 hover:cursor-point drop-shadow-2xl">
                            <span className="text-4xl md:text-5xl lg:text-6xl text-slate-200 mx-3 font-semibold lg:font-normal">I'm</span>
                            <span className={`text-4xl md:text-5xl lg:text-6xl ${neucha.className} text-transparent uppercase font-semibold whitespace-nowrap`}>
                                Abbas Ali Dalal
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center lg:justify-start lg my-4 w-full ">
                    <div className="">
                        <span className="text-4xl md:text-5xl lg:text-6xl text-slate-200 mx-3 font-semibold lg:font-normal">
                            I'm a 
                        </span>
                    </div>
                    <div className="flex flex-row items-end font-semibold bg-clip-text bg-gradient-to-r to-red-800 from-orange-400 transition-all duration-500 hover:cursor-pointer drop-shadow-2xl ">
                        <span className={`text-3xl md:text-5xl lg:text-6xl text-transparent ${neucha.className} uppercase font-semibold whitespace-nowrap lg:font-normal`}>
                            Full Stack Developer
                        </span>
                    </div>
                </div>
            </div>
            
            <div className={`relative w-full md:w-[80%] lg:w-[35%] h-[30%] shrink-0 lg:h-[70%] overflow-hidden flex justify-center ${!sidebarStatus ? 'block' : 'hidden'}`}>
                {LottieAnimation}
            </div>
        </div>
    )
}

export default Introduction