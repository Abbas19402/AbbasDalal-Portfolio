import type { NextPage } from "next";
import Nav from "../../../Constants/Sidebar/Navigation";
import Link from "next/link";
import Image from "next/image";
import { toggleSidebar } from "../../../redux/Transitions/transitionSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Menu from '../../Icons/menu-4-fill.png'

const Sidebar: NextPage = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector<RootState , Boolean>(state => state.transitions.sidebarStatus)

  const [ sidebar,setSidebar ] = useState(false);

  console.log(Nav[0].name);
  return (
    <div className="w-full h-full border-8 border-black/30">
      <div
        className={`fixed top-7 right-7 transition-all duration-300 hover:scale-110 `}
        onMouseOver={() => {
          setSidebar(true);
          dispatch(toggleSidebar(true));
        }}
      >
        <div className="text-slate-200 w-10 h-10 flex justify-center items-center rounded-full">
          {sidebar ? <div className="text-black text-2xl font-[100]" onClick={()=> {
            if(sidebar) {
              setSidebar(false)
              dispatch(toggleSidebar(false))
            }
          }}>
            <span className="block lg:hidden">
              &#x2715;
            </span>
          </div> : <Image alt="Menu" src={Menu}/>}
        </div>
      </div>
      <ul className="flex flex-col w-full justify-center items-center bg-white h-full " onMouseLeave={() => {
        if(sidebar) {
          setSidebar(false)
          dispatch(toggleSidebar(false))
        }
      }}>
        {Nav.map((item, index) => (
          <li key={index} onClick={() => {
            setSidebar(false);
            dispatch(toggleSidebar(!sidebar));
          }}>
            <Link href={`#${item.link}`}>
              <div className="m-2 transition-all hover:scale-110  group">
                <span className="text-gray-600 tracking-widest font-light group-hover:font-normal group-hover:text-black uppercase hover:drop-shadow-lg">
                  {item.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
