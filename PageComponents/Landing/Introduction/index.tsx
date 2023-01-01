import type { NextPage } from "next";
import { ScriptProps } from "next/script";

const Introduction: NextPage<ScriptProps> = () => {
    return (
        <div className="w-full h-screen">
            <span className="text-6xl text-white">Introduction</span>
        </div>
    )
}

export default Introduction