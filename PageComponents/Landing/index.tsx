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
        <div className={`h-full scroll-smooth overflow-y-auto ${Styles.noScroll} flex flex-col relative min-h-screen px-4 sm:px-8 lg:px-16 py-4 sm:py-8 lg:py-12`}
            style={{
                background: "radial-gradient(ellipse at top left, rgba(67,56,202,0.12) 0%, transparent 60%), linear-gradient(135deg, #18181b 0%, #23272f 100%)",
                backdropFilter: "blur(8px)",
            }}
        >
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
                <Connect subject={subject}/>
            </div>
            {/* Footer */}
            <footer className="w-full bg-white/5 border-t border-white/10 backdrop-blur shadow-inner py-6 mt-12">
                <div className="max-w-6xl mx-auto text-center text-white/60 text-sm font-light tracking-wide">
                    © 2024 Abbas Ali Dalal. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Landing