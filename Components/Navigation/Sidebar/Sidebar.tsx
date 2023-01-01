import type { NextPage } from "next";
import Nav from "../../../Constants/Sidebar/Navigation";
import Link from "next/link";

const Sidebar: NextPage = () => {
    console.log(Nav[0].name)
    return (
        <div className="w-full h-full flex justify-center items-center">
            <ul className="flex flex-col w-full mx-5">
                {Nav.map((item,index)=> (
                    <li>
                        <Link href={`#${item.link}`}>
                            <div className="m-2 transition-all hover:scale-110 hover:cursor-pointer group">
                                <span className="text-gray-400 tracking-widest font-light group-hover:font-normal group-hover:text-white">{item.name}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>        
    )
} 

export default Sidebar