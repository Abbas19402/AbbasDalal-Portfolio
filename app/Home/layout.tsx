import type { NextPage } from "next"
import type { ScriptProps } from "next/script"
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import Image from "next/image";
import Background from '../../public/Assets/Background/background.jpg'

const MainLayout: NextPage<ScriptProps> = ({ children }) => {
    return (
        <div className="h-screen w-full relative border-blue-500 justify-center items-center overflow-x-hidden">
            <div className="fixed w-screen h-screen">
                <Image alt="background" src={Background} fill={true} />
            </div>
            <div className="flex flex-row w-full h-full backdrop-blur-md absolute">
                <div className="w-full lg:w-[70vw]">
                    {children}
                </div>
                <div className="w-full lg:w-[30vw]">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;