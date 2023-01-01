import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Styles from "../../styles/rmScrollbar.module.css";

const Landing: NextPage<ScriptProps> = () => {
    return(
        <div className={`h-full scroll-smooth overflow-y-auto ${Styles.noScroll}`}>
            <div id="introduction">
                <Introduction/>
            </div>
            <div id="experience">
                <Experience />
            </div>
        </div>
    )
}

export default Landing