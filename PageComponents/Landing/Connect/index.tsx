import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Location from '../../../Components/Icons/map-pin-2-fill.png'
import Mail from '../../../Components/Icons/mail-line.png'
import Instagram from '../../../Components/Icons/instagram-line.png'
import Github from '../../../Components/Icons/github-fill.png'
import LinkedIn from '../../../Components/Icons/linkedin-box-fill.png' 
import Forms from "../../../Components/Forms";

const Connect = ({ subject }) => {
    const router = useRouter();
    const SendMail = async( mailData: {} ) => {
        try{
            const { data:mailResponse } = await axios.request({
                url: '/api/mail',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({subject: `Connection request from portfolio regarding ${subject}`, ...mailData}),
            })
            console.log(mailResponse.data)
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <div className="w-full min-h-screen max-w-6xl mx-auto flex flex-col-reverse lg:flex-row px-4 py-24 gap-12 lg:gap-0">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8">
                <div className="flex flex-col gap-y-3 w-full max-w-md">
                    <span className="text-5xl text-white tracking-wider font-bold mb-2">Get a quote</span>
                    <span className="text-lg text-white/70 font-light mb-4">Fill up the form and I will get back to you<br className="hidden lg:block"/> at the drop of a hat.</span>
                </div>
                <div className="flex flex-col gap-y-4 w-full max-w-md">
                    <div onClick={() => {
                        router.push('mailto:abbasali.dalal07@gmail.com')
                    }} className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3 shadow-lg backdrop-blur hover:border-indigo-400/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Image src={Mail} alt="email" width={28} height={28}/>
                        <span className="tracking-tight text-white/90 text-base font-medium">abbasali.dalal07@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3 shadow-lg backdrop-blur hover:border-indigo-400/40 hover:scale-105 transition-all duration-300">
                        <Image src={Location} alt="location" width={28} height={28}/>
                        <span className="tracking-tight text-white/80 text-base font-medium">Rajasthan - India</span>
                    </div>
                </div>
                <div className="flex gap-4 mt-6 w-full max-w-md">
                    <Link href={'/'} className="h-12 w-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-full shadow-md backdrop-blur hover:border-indigo-400/40 hover:scale-110 transition-all duration-300">
                        <Image src={Instagram} alt="Instagram" width={26} height={26}/>
                    </Link>
                    <Link href={'https://github.com/Abbas19402'} target={'_blank'} className="h-12 w-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-full shadow-md backdrop-blur hover:border-indigo-400/40 hover:scale-110 transition-all duration-300">
                        <Image src={Github} alt="Github" width={26} height={26}/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/abbas-ali-dalal-4510b3200/'} target={'_blank'} className="h-12 w-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-full shadow-md backdrop-blur hover:border-indigo-400/40 hover:scale-110 transition-all duration-300">
                        <Image src={LinkedIn} alt="LinkedIn" width={26} height={26}/>
                    </Link>
                </div>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                <div className="w-full max-w-xl">
                    <Forms.ContactForm func={SendMail}/>
                </div>
            </div>
        </div>
    )
}

export default Connect
