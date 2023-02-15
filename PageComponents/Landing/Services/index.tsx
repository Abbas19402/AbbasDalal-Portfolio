import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useLottie } from 'lottie-react'
import Link from "next/link";

import Button from "../../../Components/Buttons/Common/common_button";
import CodeAnimation from '../../../public/Assets/Animations/serviceAnimation2.json'

const Services: NextPage<ScriptProps> = () => {
    const lottieOptions = {
        animationData: CodeAnimation,
        loop: true
    }

    const { View:ServicesAnimation } = useLottie(lottieOptions)
    return(
        <div className="w-full h-screen ">
            <div className="w-full h-full flex flex-row">
                <div className="flex flex-col lg:flex-row lg:divide-x-2 lg:divide-white justify-center items-center text-6xl text-center w-full h-full py-10">
                    <div className="w-[100vw] lg:min-w-[50vw] h-full flex flex-col justify-center items-center gap-10">
                        <div className="w-full text-white">
                            <span className="text-6xl">Checkout Services</span>
                        </div>
                        <Link href={'services'}>
                            <Button Title={'Check out my Services'} Background={'bg-gray-200'} TextColor={'text-gray-800'} />  
                        </Link>
                    </div>
                    <div className="w-[100vw] lg:min-w-[50vw] h-full flex flex-col justify-center items-center">
                        <div className="w-[70%] h-[70%]">
                            {ServicesAnimation}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services