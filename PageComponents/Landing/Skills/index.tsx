import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";

import SkillsArray from "../../../Constants/Skills/Skills";
import Cards from "../../../Components/Cards";
import Styles from '../../../styles/rmScrollbar.module.css'

const Skills: NextPage<ScriptProps> = () => {
  return (
    <div className="w-full md:w-[70vw] h-full flex flex-col mx-auto justify-center items-center">
      <div className={`my-5 text-center`}>
        <span className="text-white text-6xl tracking-wider">Skills</span>
      </div>
      <div className="w-full lg:max-w-[70vw] overflow-hidden flex flex-col gap-10 flex-wrap justify-start items-start">
        {[...Array(SkillsArray.length)]
          .map((_, key) => {
            return Object.values(SkillsArray)[key].type;
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
          .map((type, index) => (
            <div key={index} className="w-[90%] lg:w-[80vw] h-fit rounded-md mx-auto">
              <div className="min-w-[16vw] w-[40vw] md:w-min h-10 text-white rounded-md mb-2">
                <span className="text-2xl font-light capitalize">
                  {type}
                </span>
              </div>

              <div className={`w-full h-fit flex flex-row justify-start items-center gap-5 overflow-x-scroll ${Styles.noScroll} lg:overflow-x-visible lg:flex-wrap`}>
                {SkillsArray.map(
                  (item, key) =>
                    item.type == type && (
                      <Cards.SkillCard
                        key={key}
                        iconSrc={item.image.src}
                        skillName={item.value}
                      />
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