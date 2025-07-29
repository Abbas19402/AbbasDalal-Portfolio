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
        <div className="w-full h-screen flex flex-col lg:flex-row justify-evenly items-center relative overflow-hidden">
            {/* <div className="hidden lg:block absolute left-0 top-0 w-[60vw] h-[80vh] bg-white/10 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl z-0 blur-sm" style={{filter:'blur(2px)'}} /> */}
            <div className={`relative z-10 flex flex-col justify-center items-start w-full lg:w-[60%] h-fit lg:h-[80%] px-4 sm:px-8 lg:px-10 py-8 lg:py-10`}>
                <span className="text-base sm:text-lg md:text-xl text-indigo-200/80 mb-4 sm:mb-8 tracking-wide animate-fade-in text-left w-full">Welcome to my digital space!</span>
                <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full text-left">
                    <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-light drop-shadow-lg text-left">Hey there,</span>
                    <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-light drop-shadow-lg text-left">I'm <span className="font-bold text-indigo-300">Abbas Ali Dalal,</span></span>
                    <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg text-left">Building seamless digital experiences</span>
                </div>
                <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl animate-fade-in-slow leading-relaxed text-left">
                    I craft seamless digital experiences, blending beautiful design with robust code. Passionate about building products that make a difference, I specialize in web, mobile, and backend development. Let's create something amazing together.
                </p>
                <div className="block lg:hidden w-full flex justify-center mt-8">
                    {typeof window !== 'undefined' && <DynamicLottie animationData={CodeAnimation} loop={true} />}
                </div>
            </div>
            <div className={`hidden lg:flex relative w-[35%] h-[70%] shrink-0 justify-center`}>
                {typeof window !== 'undefined' && <DynamicLottie animationData={CodeAnimation} loop={true} />}
            </div>
        </div>
    )
}

export default Introduction