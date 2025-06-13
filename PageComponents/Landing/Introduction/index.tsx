import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { Neucha } from '@next/font/google';
import { useSelector } from "react-redux";
import CodeAnimation from '../../../public/Assets/Animations/Code4.json'
import { RootState } from "../../../redux/Store";   
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false });

const neucha = Neucha({
  subsets: ['latin'],
  weight: '400'
})

const Introduction: NextPage<ScriptProps> = () => {
    const sidebarStatus = useSelector<RootState , Boolean>(state => state.transitions.sidebarStatus);
    return (
        <div className="w-full h-screen flex flex-col-reverse lg:flex-row justify-evenly items-center relative overflow-hidden">
            <div className="absolute left-0 top-0 w-[60vw] h-[80vh] bg-white/10 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl z-0 blur-sm" style={{filter:'blur(2px)'}} />
            <div className={`relative z-10 flex flex-col justify-center items-start ${!sidebarStatus ? 'w-full md:w-[80%] lg:w-[60%]' : 'w-full'} h-fit lg:h-[80%] p-3 lg:p-10`}>
                <span className="text-lg md:text-xl text-indigo-200/80 mb-8 tracking-wide animate-fade-in">Welcome to my digital space!</span>
                <div className="flex flex-col gap-y-4 w-full text-left">
                    <span className="text-5xl md:text-6xl lg:text-7xl text-white font-light drop-shadow-lg">Hey there,</span>
                    <span className="text-4xl md:text-5xl lg:text-6xl text-white font-light drop-shadow-lg">I'm <span className="font-bold text-indigo-300">Abbas Ali Dalal,</span></span>
                    <span className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">Building seamless digital experiences</span>
                </div>
                <p className="mt-8 text-base md:text-lg text-white/70 max-w-2xl animate-fade-in-slow leading-relaxed">
                    I craft seamless digital experiences, blending beautiful design with robust code. Passionate about building products that make a difference, I specialize in web, mobile, and backend development. Let's create something amazing together.
                </p>
            </div>
            <div className={`relative w-full md:w-[80%] lg:w-[35%] h-[30%] shrink-0 lg:h-[70%] overflow-hidden flex justify-center ${!sidebarStatus ? 'block' : 'hidden'}`}>
                {typeof window !== 'undefined' && <DynamicLottie animationData={CodeAnimation} loop={true} />}
            </div>
        </div>
    )
}

export default Introduction