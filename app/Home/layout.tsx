import type { NextPage } from "next"
import type { ScriptProps } from "next/script"
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import Image from "next/image";
import Background from '../../public/Assets/Background/cool-background.png'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const MainLayout: NextPage<ScriptProps> = ({ children }) => {
    const sidebarStatus = useSelector<RootState , Boolean>(state => state.transitions.sidebarStatus);
    return (
        <div className="h-screen w-full relative border-blue-500 justify-center items-center overflow-x-hidden">
            <div className="fixed w-screen h-screen bg-white">
                <Image alt="background" src={Background} fill={true}/>
            </div>
            <div className="flex flex-row w-full h-full absolute justify-start items-start overflow-hidden">
                <div className={`w-full transition-all duration-300  ${sidebarStatus ? 'w-[82vw]' : 'w-[100vw]'} overflow-y-auto h-full`}>
                    {children} 
                </div>
                <div className={`w-full lg:max-w-[18vw] transition-all duration-300  ${sidebarStatus ? 'w-full' : 'w-0'} border-l-2 border-l-gray-300 overflow-hidden h-full right-0 top-0 fixed`}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;