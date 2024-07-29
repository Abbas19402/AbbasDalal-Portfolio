import type { NextPage } from "next"
import type { ScriptProps } from "next/script"
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Nav from "../../Constants/Sidebar/Navigation"
import Link from "next/link";

const MainLayout: NextPage<ScriptProps> = ({ children }) => {
    const sidebarStatus = useSelector<RootState , Boolean>(state => state.transitions.sidebarStatus);
    return (
        <div className="h-screen w-full relative border-blue-500 justify-center items-center overflow-x-hidden">
            <div className="fixed w-screen h-screen bg-black">
            </div>
            <div className="flex flex-row w-full h-full absolute justify-start items-start overflow-hidden">
                <div className={`w-full transition-all duration-300 overflow-y-auto h-full`}>
                    {children} 
                </div>
                <div className="absolute w-full flex justify-center">
                    <div className="absolute top-10 h-16 w-[40vw] bg-white/10 mx-auto backdrop-blur-xl rounded-full flex flex-row justify-around items-center">
                    {Nav.map((item, index) => (
                        <div className="hover:bg-black/40 transition-all duration-500 rounded-2xl" key={index} onClick={() => {
                        }}>
                            <Link href={`#${item.link}`}>
                                <div className="m-2 transition-all">
                                    <span className="text-white/80 tracking-widest font-semibold uppercase hover:drop-shadow-lg">
                                    {item.name}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;