import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import { useState } from "react";

import Introduction from "./Introduction";
import Styles from "../../styles/rmScrollbar.module.css";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Connect from "./Connect";
import { useRouter } from "next/router";

const Landing: NextPage<ScriptProps> = () => {
    const router = useRouter();
    return(
        <div className={`h-full scroll-smooth overflow-y-auto ${Styles.noScroll} flex flex-col gap-y-32`}>
            <div id="home">
                <Introduction/>
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
                <Connect/>
            </div>
        </div>
    )
}

export default Landing