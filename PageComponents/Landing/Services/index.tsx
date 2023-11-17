import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useLottie } from 'lottie-react'
import Link from "next/link";

import Button from "../../../Components/Buttons/Common/common_button";
import CodeAnimation from '../../../public/Assets/Animations/serviceAnimation2.json'
import Cards from "../../../Components/Cards";
import services from "../../../Constants/Services/services";

const Services: NextPage<ScriptProps> = () => {
    const lottieOptions = {
        animationData: CodeAnimation,
        loop: true
    }

    const { View:ServicesAnimation } = useLottie(lottieOptions)
    return(
        <div className="w-full h-fit ">
            <div className="w-full text-white mb-20 text-center">
                <span className="text-6xl mx-auto tracking-wider">Checkout Services</span>
            </div>
            <div className="w-full h-full flex flex-row">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-center w-full h-full py-10">
                    <div className="w-[100vw] h-full flex flex-col justify-center items-center gap-10">
                        {services.map((item,key)=> (
                            <Cards.ServiceCard
                                key={key}
                                service={item.service} 
                                description={item.description}
                                techUsed={item.techUsed}
                            />
                        ))}
                        <Link href={'services'} className="lg:hidden block">
                            <div className="w-full py-2">
                                <Button Title={'Check out all of my Services'} Background={'bg-gray-200'} TextColor={'text-gray-800'} />  
                            </div>
                        </Link>
                    </div>
                    <div className="w-[100vw] lg:min-w-[50vw] h-max flex flex-col justify-between items-center">
                        <div className="w-[70%] h-[70%]">
                            {ServicesAnimation}
                        </div>
                        <Link href={'services'} className="hidden lg:block">
                            <div className="w-full py-2 my-28">
                                <Button Title={'Check out my Services'} Background={'bg-gray-200'} TextColor={'text-gray-800'} />  
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services