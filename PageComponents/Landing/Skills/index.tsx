import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";

import SkillsArray from "../../../Constants/Skills/Skills";

const Skills: NextPage<ScriptProps> = () => {
  // console.log([...Array(10)].map((_,key) => {
  //     return {category: Object.values(SkillsArray)[key].type}
  // }))

  const Categories = [...Array(10)]
    .map((_, key) => {
      return Object.values(SkillsArray)[key].type;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  console.log(Categories);

  return (
    <div className="w-full md:w-[70vw] h-full flex flex-col mx-auto justify-center items-center">
      <div className={`my-5 text-center`}>
        <span className="text-white text-6xl tracking-wider">Skills</span>
      </div>
      {/* <div className="w-fit max-w-[80%] lg:max-w-[70vw] h-fit flex flex-row justify-center items-center gap-3 overflow-hidden flex-wrap ">
        {SkillsArray.map((icon, key) => (
          <div
            key={key}
            className="h-30 w-30 flex flex-col justify-center items-center rounded-tl-2xl p-2 m-4"
          >
            <div className="h-20 w-20 flex items-center justify-center relative rounded-lg overflow-hidden">
              <Image
                alt={`${icon.value}`}
                src={`${icon.image.src}`}
                fill={true}
              />
            </div>
            <div className="my-4 font-semibold w-full text-center rounded-md px-2 bg-zinc-800 shadow-2xl shadow-black">
              <span className="text-xl tracking-wider text-white font-thin">
                {icon.value}
              </span>
            </div>
          </div>
        ))}
      </div> */}
      <div className="w-fit max-w-[80%] lg:max-w-[70vw] overflow-hidden flex flex-row gap-10 flex-wrap justify-between items-center">
        {[...Array(10)]
          .map((_, key) => {
            return Object.values(SkillsArray)[key].type;
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
          .map((type, index) => (
            <div key={index} className="w-[80vw] lg:w-56 lg:h-96 rounded-md mx-auto">
              <div className="w-full h-10 flex justify-center items-center text-white rounded-md mb-2 bg-sky-900/40">
                <span className="m-2 text-2xl font-light capitalize">
                  {type}
                </span>
              </div>

              <div className="w-full h-fit flex flex-col justify-start items-center">
                {SkillsArray.map(
                  (item, key) =>
                    item.type == type && (
                      <div
                        key={key}
                        className="w-full h-14 flex flex-row justify-start items-center px-5 gap-x-4"
                      >
                        <div className="h-10 w-10 flex items-center justify-center relative rounded-lg overflow-hidden">
                          <Image
                            alt={`${item.value}`}
                            src={`${item.image.src}`}
                            fill={true}
                          />
                        </div>
                        <div className="text-xl lg:text-base tracking-wider text-white">
                          {item.value}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
