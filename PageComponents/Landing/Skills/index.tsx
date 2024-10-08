import type { NextPage } from "next";
import { ScriptProps } from "next/script";
import Image from "next/image";

import SkillsArray from "../../../Constants/Skills/Skills";
import Cards from "../../../Components/Cards";
import Styles from '../../../styles/rmScrollbar.module.css'
import { Advent_Pro } from "@next/font/google";
import Heading from "../../../Components/Typography/Heading";

const font = Advent_Pro({
  subsets: ['latin'],
  weight: '800'
})

const Skills: NextPage<ScriptProps> = () => {
  return (
    <div className="w-full md:w-[70vw] min-h-screen flex flex-col mx-auto justify-evenly items-center">
      <Heading heading={'Tech Stack'} />
      <div className="w-full lg:max-w-[70vw] overflow-hidden flex flex-row gap-10 flex-wrap justify-start items-start">
        {[...Array(SkillsArray.length)]
          .map((_, key) => {
            return Object.values(SkillsArray)[key].type;
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
          .map((type, index) => (
            <div key={index} className="h-fit rounded-md mx-auto">
              <div className="min-w-[16vw] w-[70vw] px-5 md:w-min h-10 text-orange-500 text-start lg:text-center rounded-md mb-5 mx-auto">
                <span className={`text-2xl capitalize font-bold tracking-wider ${font.className}`}>
                  {type}
                </span>
              </div>

              <div className={`px-5 w-full h-fit flex flex-col justify-start items-center gap-y-5 gap-x-2 overflow-x-scroll ${Styles.noScroll} lg:overflow-x-visible lg:flex-wrap px-2 py-1 rounded-lg`}>
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