import type { NextPage } from 'next'
import Image from 'next/image'
import { ScriptProps } from 'next/script'
import React from 'react'
import Sidebar from '../Components/Navigation/Sidebar/Sidebar'
import HomeBg from '../public/Assets/Background/home.jpg'; 

const MainLayout: NextPage<ScriptProps> = ({children}) => {
    return (
        <div className="w-full h-full relative right-[50rem] bg-black border-blue-500 justify-center items-center">
            <div className='fixed w-screen h-screen top-0 left-0'>
                <Image src={HomeBg} fill={true} alt="background"/>
            </div>
            <div className="flex flex-row w-full h-full border-4 border-red-500 bg-black">
                <div className="w-full lg:w-[70vw] border-8 border-red-500 bg-black">
                    {children}
                </div>
                <div className="w-full lg:w-[30vw] border-8 border-red-500 bg-black">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default MainLayout