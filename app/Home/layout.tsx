"use client";
import type { NextPage } from "next";
import type { ScriptProps } from "next/script";
import Image from "next/image";
import Menu from "../../Components/Icons/menu-4-fill.png";
import Nav from "../../Constants/Sidebar/Navigation";
import Link from "next/link";
import { useState } from "react";
import { Lexend } from "@next/font/google";
import DownloadIcon from "../../Components/Icons/DownloadIcon";

const font = Lexend({
  subsets: ["latin"],
  weight: "400",
});

const MainLayout: NextPage<ScriptProps> = ({ children }) => {
  const [active, setActive] = useState<String>(Nav[0].name);
  const [navActiveOnSmall, setNavActiveOnSmall] = useState<Boolean>(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Assets/Documents/Abbas Dalal CV Min.pdf";
    link.download = "Abbas_Dalal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="h-screen w-full relative border-blue-500 justify-center items-center overflow-x-hidden">
      <div className="fixed w-screen h-screen bg-black"></div>
      <div className="flex flex-row w-full h-full absolute justify-start items-start overflow-hidden">
        <div
          className={`w-full transition-all duration-300 overflow-y-auto h-full`}
        >
          {children}
        </div>
        <div className="absolute w-full flex justify-center">
          <div
            className={`fixed lg:hidden h-14 w-14  ${
              navActiveOnSmall
                ? "backdrop-blur-none"
                : "backdrop-blur-2xl bg-white/10"
            } top-10 right-10 rounded-2xl flex justify-center items-center z-10`}
            onClick={() => setNavActiveOnSmall(!navActiveOnSmall)}
          >
            <Image alt="Menu" src={Menu} width={30} height={30} />
          </div>
          <div
            className={`px-2 absolute overflow-hidden lg:top-5 transition-all duration-500 ${
              navActiveOnSmall
                ? "opacity-100"
                : "opacity-0 -z-10 lg:opacity-100 lg:z-0"
            } h-[100vh] lg:h-16 w-[100vw] lg:min-w-[40vw] lg:max-w-[90vw] bg-black/30 mx-auto backdrop-blur-lg lg:rounded-3xl flex flex-col gap-y-2 lg:flex-row justify-center lg:justify-between items-center border-2 border-neutral-800`}
          >
            <div className="w-fit flex flex-col gap-x-2 gap-y-2 lg:flex-row justify-evenly lg:justify-between items-center">
              {Nav.map((item, index) => (
                <div
                  className={`hover:bg-white/10 ${
                    active == item.name ? "bg-white/10" : "bg-transparent"
                  } transition-all duration-500 rounded-full`}
                  key={index}
                  onClick={() => {
                    setActive(item.name);
                    setNavActiveOnSmall(false);
                  }}
                >
                  <Link href={`#${item.link}`}>
                    <div className="m-1 mx-2 transition-all">
                      <span
                        className={`font-thin text-white/80 tracking-widest text-lg uppercase hover:drop-shadow-lg ${font.className}`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <button
              onClick={downloadResume}
              className="mt-20 lg:my-0 text-white/80 border rounded-lg px-2 py-1 mr-2 flex items-center gap-x-2 hover:bg-white/10 transition-all duration-300"
            >
              Resume <DownloadIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
