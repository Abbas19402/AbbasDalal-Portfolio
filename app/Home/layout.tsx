import type { NextPage } from "next"
import type { ScriptProps } from "next/script"
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { ToastContainer } from "react-toastify";

const MainLayout: NextPage<ScriptProps> = ({ children }) => {
    const sidebarStatus = useSelector<RootState , Boolean>(state => state.transitions.sidebarStatus);
    return (
        <div className="h-screen w-full relative border-blue-500 justify-center items-center overflow-x-hidden">
            <div className="fixed w-screen h-screen bg-black">
                {/* <Image alt="background" src={Background} fill={true}/> */}
            </div>
            <div className="flex flex-row w-full h-full absolute justify-start items-start overflow-hidden">
                <div className={`w-full transition-all duration-300  ${sidebarStatus ? 'w-full lg:w-[82vw]' : 'w-[100vw]'} overflow-y-auto h-full`}>
                    {children} 
                    
                </div>
                <div className={`w-[100vw] md:max-w-[40vw] lg:max-w-[18vw] transition-all duration-300 ${sidebarStatus ? 'w-full h-full md:h-[20vh] lg:h-[50vh]' : 'w-0 h-[0vh] '} overflow-hidden right-0 top-0 fixed z-50`}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;