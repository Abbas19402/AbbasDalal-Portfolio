import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { Londrina_Shadow , Bungee_Shade , Poiret_One } from '@next/font/google'

const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: '400'
})
const bungeeShade = Bungee_Shade({
  subsets: ['latin'],
    weight: '400'
})

const Introduction: NextPage<ScriptProps> = () => {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-row my-4">
                    {/* Name */}
                    <span className="text-5xl text-slate-600 mx-2">
                        Hey, It's
                    </span>
                    <div className="flex flex-row items-end font-semibold bg-clip-text bg-gradient-to-r to-sky-800 from-slate-400  transition-all duration-500 hover:cursor-point drop-shadow-2xl">
                        <span className={`text-5xl ${bungeeShade.className} text-transparent  uppercase font-semibold`}>
                            Abbas Ali Dalal
                        </span>
                    </div>
                </div>
                <div className="flex flex-row my-4">
                    {/* Name */}
                    <span className="text-5xl text-slate-600 mx-2">
                        I'm a 
                    </span>
                    <div className="flex flex-row items-end font-semibold bg-clip-text bg-gradient-to-r to-red-800 from-orange-400  transition-all duration-500 hover:cursor-pointer drop-shadow-2xl ">
                        <span className={`text-5xl text-transparent ${bungeeShade.className} uppercase font-semibold`}>
                            Full Stack Developer
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Introduction