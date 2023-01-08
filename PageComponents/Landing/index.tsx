import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Styles from "../../styles/rmScrollbar.module.css";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Connect from "./Connect";

const Landing: NextPage<ScriptProps> = () => {
    return(
        <div className={`h-full scroll-smooth overflow-y-auto ${Styles.noScroll}`}>
            <div id="introduction">
                <Introduction/>
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="connect">
                <Connect />
            </div>
        </div>
    )
}

export default Landing