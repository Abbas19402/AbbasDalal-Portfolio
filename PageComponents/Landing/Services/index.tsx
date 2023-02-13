import type { NextPage } from "next";
import { ScriptProps } from "next/script";

const Services: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full h-screen">
            <div className="w-full h-full flex flex-row">
                <div className="flex justify-center items-center text-6xl text-center w-full h-full border">
                    <span className="text-white">Click here for services</span>
                </div>
            </div>
        </div>
    )
}

export default Services