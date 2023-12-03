import type { NextPage } from "next";
import { ScriptProps } from "next/script";

import Introduction from "./Introduction";
import Styles from "../../styles/rmScrollbar.module.css";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Connect from "./Connect";
import { useEffect, useState } from "react";

interface Props {
    subject: string;
}

const Landing: NextPage<ScriptProps> = () => {
    const [ subject, setSubject ] = useState<Props['subject']>('');
    useEffect(()=> {console.log(subject)},[subject])
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
                <Services setSubject={setSubject}/>
            </div>
            <div id="connect">
                <Connect subject={subject}/>
            </div>
        </div>
    )
}

export default Landing