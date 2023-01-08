import type { NextPage } from "next";
import { ScriptProps } from "next/script";

const Projects: NextPage<ScriptProps> = () => {
    return(
        <div className="w-full h-screen">
            <span className="text-6xl text-white">Projects</span>
        </div>
    )
}

export default Projects