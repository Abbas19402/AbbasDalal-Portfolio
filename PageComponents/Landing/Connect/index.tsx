import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";
import Phone from '../../../Components/Icons/phone-line.png'

const Connect: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full min-h-screen flex flex-col lg:flex-row">
            <div className="w-full h-full 
            flex flex-col justify-between items-center lg:items-start">
                <div className="flex flex-col my-14 mx-20 gap-y-5">
                    <span className="text-5xl text-white tracking-wider">Get a quote</span>
                    <span className="text-xl text-gray-400">Fill up the form and I will get back to you<br className="hidden lg:block"/> within 24 hours.</span>
                </div>
                <div className="flex flex-col mx-20 gap-y-4 my-10">
                    <div className="w-80 h-16 rounded-lg hover:border-2 hover:bg-white/10">
                        <Image src={Phone} alt="phone" width={30} height={30}/>
                    </div>
                    <div className="w-80 h-16 rounded-lg hover:border-2 hover:bg-white/10"></div>
                    <div className="w-80 h-16 rounded-lg hover:border-2 hover:bg-white/10"></div>
                </div>
                <div className="my-10 mx-20 flex justify-start items-center w-full">
                    <div className="rounded-full h-24 w-24 border-2 flex flex-row justify-start items-center relative">
                        
                    </div>
                    <div className="rounded-full h-24 w-24 border-2">
                        
                    </div>
                    <div className="rounded-full h-24 w-24 border-2">
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-full border-2">
                
            </div>
        </div>
    )
}

export default Connect