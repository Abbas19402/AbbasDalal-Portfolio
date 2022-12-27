import type { NextPage } from "next";


const Sidebar: NextPage = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <ul className="flex flex-col">
                <li className="m-5 transition-all hover:scale-110 hover:cursor-pointer">
                    <span className="text-white tracking-widest font-light">Introduction</span>
                </li>
                <li className="m-5 transition-all hover:scale-110 hover:cursor-pointer">
                    <span className="text-white tracking-widest font-light">Introduction</span>
                </li>
                <li className="m-5 transition-all hover:scale-110 hover:cursor-pointer">
                    <span className="text-white tracking-widest font-light">Introduction</span>
                </li>
                <li className="m-5 transition-all hover:scale-110 hover:cursor-pointer">
                    <span className="text-white tracking-widest font-light">Introduction</span>
                </li>
                <li className="m-5 transition-all hover:scale-110 hover:cursor-pointer">
                    <span className="text-white tracking-widest font-light">Introduction</span>
                </li>
            </ul>
        </div>        
    )
} 

export default Sidebar