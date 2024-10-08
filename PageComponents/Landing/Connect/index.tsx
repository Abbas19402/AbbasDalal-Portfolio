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
        <div className="w-full min-h-screen max-w-xl lg:max-w-full mx-auto flex flex-col-reverse lg:flex-row px-10 md:px-0">
            <div className="w-full h-full flex flex-col justify-between items-center lg:items-start my-auto">
                <div className="lg:flex flex-col my-14 mx-20 gap-y-5 hidden">
                    <span className="text-5xl text-white tracking-wider">Get a quote</span>
                    <span className="text-xl text-gray-400">Fill up the form and I will get back to you<br className="hidden lg:block"/> at the drop of a hat.</span>
                </div>
                <div className="flex flex-col gap-y-4 my-10 w-full lg:px-20">
                    <div onClick={() => {
                        router.push('mailto:abbasali.dalal07@gmail.com')
                    }} className="w-full lg:w-80 h-16 rounded-lg  border-2 bg-white/10 hover:bg-transparent border-transparent hover:border-white flex flex-row justify-between items-center px-5 hover:cursor-pointer">
                        <Image src={Mail} alt="phone" width={30} height={30}/>
                        <span className="tracking-tight text-white text-md">abbasali.dalal07@gmail.com</span>
                    </div>
                    <div className="w-full lg:w-80 h-16 rounded-lg border-2 bg-white/10 hover:bg-transparent border-transparent hover:border-white flex flex-row justify-between items-center px-5 hover:cursor-pointer">
                        <Image src={Location} alt="phone" width={30} height={30}/>
                        <span className="tracking-wider text-white text-md">Rajasthan - India</span>
                    </div>
                </div>
                <div className="my-10 lg:mx-20 mx-0 flex justify-between items-center w-full lg:px-0 lg:w-80 gap-x-4">
                    <Link href={'https://www.instagram.com/abbas_19402/'} target={'_blank'}  className="rounded-2xl h-14 w-14 flex flex-row justify-center items-center relative border-2 bg-white/10 hover:bg-transparent border-transparent hover:border-white">
                        <Image src={Instagram} alt="phone" width={30} height={30}/>
                    </Link>
                    <Link href={'https://github.com/Abbas19402'} target={'_blank'} className="rounded-2xl h-14 w-14 border-2 flex flex-row justify-center items-center relative bg-white/10 hover:bg-transparent border-transparent hover:border-white">
                        <Image src={Github} alt="phone" width={30} height={30}/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/abbas-ali-dalal-4510b3200/'} target={'_blank'} className="rounded-2xl h-14 w-14 border-2 flex flex-row justify-center items-center relative bg-white/10 hover:bg-transparent border-transparent hover:border-white">
                        <Image src={LinkedIn} alt="phone" width={30} height={30}/>
                    </Link>
                </div>
            </div>
            <div className="w-full lg:min-h-screen h-full flex flex-col justify-center items-center">
                <div className="flex flex-col mb-14 
                 gap-y-5 lg:hidden w-full lg:px-20">
                    <span className="text-5xl text-white tracking-wider">Get a quote</span>
                    <span className="text-xl text-gray-400">Fill up the form and I will revert to you<br className="hidden lg:block"/> at the drop of a hat.</span>
                </div>
                <div className="w-full">
                    <Forms.ContactForm func={SendMail}/>
                </div>
            </div>
        </div>
    )
}

export default Connect