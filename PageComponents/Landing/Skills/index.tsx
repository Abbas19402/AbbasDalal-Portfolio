import type { NextPage } from "next";
import { ScriptProps } from "next/script";
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
    <section className="w-full min-h-screen flex flex-col items-center py-24 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Heading heading={'Tech Stack'} />
        <p className="text-white/70 text-center text-lg max-w-2xl mb-8 font-light">My expertise spans across various technologies and frameworks, allowing me to build robust and scalable solutions.</p>
        <div className="w-full flex flex-col gap-12">
          {[...Array(SkillsArray.length)]
            .map((_, key) => Object.values(SkillsArray)[key].type)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((type, index) => (
              <div key={index} className="w-full rounded-2xl bg-white/5 border border-white/10 shadow-lg p-8 flex flex-col gap-8">
                <div className="mb-6">
                  <span className={`text-2xl capitalize font-bold tracking-wider text-white border-b-4 border-indigo-500 pb-1 ${font.className}`}>{type}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {SkillsArray.filter(item => item.type === type).map((item, key) => (
                    <Cards.SkillCard
                      key={key}
                      iconSrc={item.image.src}
                      skillName={item.value}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;