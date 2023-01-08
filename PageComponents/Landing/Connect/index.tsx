import type { NextPage } from "next";
import { ScriptProps } from "next/script";

const Connect: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full h-screen">
            <span className="text-6xl text-white">Connect</span>
        </div>
    )
}

export default Connect