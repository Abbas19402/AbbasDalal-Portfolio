import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";

import Websenor from '../../../public/Assets/Images/coder.jpg'


const Experience: NextPage<ScriptProps> = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-around items-center">
        {/* Title */}
        <div>
            <span className="text-6xl">My Work</span>
        </div>
        <div className="w-[80%] h-[80%] flex justify-center items-center rounded-2xl border">
            <div className="w-[80%] flex justify-around items-center gap-4 border">
                {/* Details */}
                <div className="w-[60%] h-full flex flex-col items-center justify-center gap-3">
                {/* Name */}
                <div className="w-full text-left px-5">
                    <span className="text-5xl text-white tracking-wide font-bold">
                    Websenor
                    </span>
                </div>
                {/* Position */}
                <div className="w-full text-left flex justify-start items-center gap-4 px-5 whitespace-nowrap">
                    <div className="h-full justify-center items-center ">
                    <span className="text-4xl text-sky-600">
                        Full Stack Developer
                    </span>
                    </div>
                    {/* <div className="h-full flex justify-center items-center ">
                    <span> - </span>
                    </div>
                    <div className="h-full flex justify-center items-center ">
                    <span className="text-3xl text-black tracking-wide">
                        Internship
                    </span>
                    </div> */}
                </div>
                <div className="w-full text-left px-5">
                    <span className="text-3xl text-white tracking-wide">
                    Internship
                    </span>
                </div>
                </div>
                {/* Image */}
                <div className="w-[20%] h-[40%] rounded-lg overflow-hidden">
                    <Image alt="companyImage" src={Websenor} className="w-full h-full"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
