import type { NextPage } from "next";
import { ScriptProps } from "next/script";

const Services: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full h-screen">
            <span className="text-6xl text-white">Services</span>
        </div>
    )
}

export default Services