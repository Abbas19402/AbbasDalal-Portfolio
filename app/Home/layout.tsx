"use client"
import type { NextPage } from "next"
import type { ScriptProps } from "next/script"
import Image from "next/image";
import Menu from "../../Components/Icons/menu-4-fill.png"
import Nav from "../../Constants/Sidebar/Navigation"
import Link from "next/link";
import { useState } from "react";
import { Advent_Pro } from "@next/font/google";

const font = Advent_Pro({
    subsets: ['latin'],
    weight: "400"
})

const MainLayout: NextPage<ScriptProps> = ({ children }) => {
    const [ active, setActive ] = useState<String>(Nav[0].name);
    const [ navActiveOnSmall, setNavActiveOnSmall ] = useState<Boolean>(false)
    return (
        <div className="h-screen w-full relative border-blue-500 justify-center items-center overflow-x-hidden">
            <div className="fixed w-screen h-screen bg-black">
            </div>
            <div className="flex flex-row w-full h-full absolute justify-start items-start overflow-hidden">
                <div className={`w-full transition-all duration-300 overflow-y-auto h-full`}>
                    {children} 
                </div>
                <div className="absolute w-full flex justify-center">
                    <div className={`fixed lg:hidden h-14 w-14  ${ navActiveOnSmall ? "backdrop-blur-none" : "backdrop-blur-2xl bg-white/10"} top-10 right-10 rounded-2xl flex justify-center items-center z-10`} onClick={() => setNavActiveOnSmall(!navActiveOnSmall)}>
                        <Image alt="Menu" src={Menu} width={30} height={30}/>
                    </div>
                    <div className={`px-2 absolute overflow-hidden lg:top-10 transition-all duration-500 ${navActiveOnSmall ? "opacity-100" : "opacity-0 -z-10 lg:opacity-100 lg:z-0"} h-[100vh] lg:h-16 w-[100vw] lg:w-[40vw] bg-white/10 mx-auto backdrop-blur-xl lg:rounded-full flex flex-col gap-y-2 lg:flex-row justify-center lg:justify-around items-center`}>
                    {Nav.map((item, index) => (
                        <div className={`hover:bg-black/40 ${ active == item.name ? "bg-black/40" : "bg-transparent" } transition-all duration-500 rounded-2xl`} key={index} onClick={() => {
                            setActive(item.name)
                            setNavActiveOnSmall(false)
                        }}>
                            <Link href={`#${item.link}`}>
                                <div className="m-2 transition-all">
                                    <span className={`text-white/80 tracking-widest text-xl uppercase hover:drop-shadow-lg ${font.className}`}>
                                    {item.name}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;