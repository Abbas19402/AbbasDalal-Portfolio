import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";
import Location from '../../../Components/Icons/map-pin-2-fill.png'
import Mail from '../../../Components/Icons/mail-line.png'
import Instagram from '../../../Components/Icons/instagram-line.png'
import Github from '../../../Components/Icons/github-fill.png'
import LinkedIn from '../../../Components/Icons/linkedin-box-fill.png' 
import Forms from "../../../Components/Forms";

const Connect: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row">
            <div className="w-full h-full flex flex-col justify-between items-center lg:items-start">
                <div className="lg:flex flex-col my-14 mx-20 gap-y-5 hidden">
                    <span className="text-5xl text-white tracking-wider">Get a quote</span>
                    <span className="text-xl text-gray-400">Fill up the form and I will get back to you<br className="hidden lg:block"/> within 24 hours.</span>
                </div>
                <div className="flex flex-col mx-20 gap-y-4 my-10">
                    <div className="w-80 h-16 rounded-lg  border-2 bg-white/10 hover:bg-transparent border-transparent hover:border-white flex flex-row justify-between items-center px-5 hover:cursor-pointer">
                        <Image src={Mail} alt="phone" width={30} height={30}/>
                        <span className="tracking-wider text-white text-md">abbasali.dalal07@gmail.com</span>
                    </div>
                    <div className="w-80 h-16 rounded-lg border-2 bg-white/10 hover:bg-transparent border-transparent hover:border-white flex flex-row justify-between items-center px-5 hover:cursor-pointer">
                        <Image src={Location} alt="phone" width={30} height={30}/>
                        <span className="tracking-wider text-white text-md">Rajasthan - India</span>
                    </div>
                </div>
                <div className="my-10 mx-20 flex justify-between items-center w-80 gap-x-4">
                    <div className="rounded-2xl h-14 w-14 flex flex-row justify-center items-center relative border-2 bg-white/10 hover:bg-transparent border-transparent hover:border-white">
                        <Image src={Instagram} alt="phone" width={30} height={30}/>
                    </div>
                    <div className="rounded-2xl h-14 w-14 border-2 flex flex-row justify-center items-center relative bg-white/10 hover:bg-transparent border-transparent hover:border-white">
                        <Image src={Github} alt="phone" width={30} height={30}/>
                    </div>
                    <div className="rounded-2xl h-14 w-14 border-2 flex flex-row justify-center items-center relative bg-white/10 hover:bg-transparent border-transparent hover:border-white">
                        <Image src={LinkedIn} alt="phone" width={30} height={30}/>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-screen h-full flex flex-col justify-center items-center">
                <div className="flex flex-col my-14 mx-20 gap-y-5 lg:hidden w-full px-6">
                    <span className="text-5xl text-white tracking-wider">Get a quote</span>
                    <span className="text-xl text-gray-400">Fill up the form and I will get back to you<br className="hidden lg:block"/> within 24 hours.</span>
                </div>
                <div className="w-full">
                    <Forms.ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Connect