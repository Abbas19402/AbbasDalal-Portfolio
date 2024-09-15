import React from "react"
import Image from "next/image"

interface Props {
    skillName: String,
    iconSrc: string
}
const SkillCard:React.FC<Props> = ({ skillName, iconSrc }) => {
    return (
        <div
            className="min-w-[70vw] md:min-w-[20vw] lg:min-w-[15vw] w-full h-12 flex flex-row justify-between items-center px-5 gap-x-4 rounded-lg hover:bg-white transition-all duration-500 hover:scale-110 group"
            >
            <div className="text-md font-light tracking-wider text-white group-hover:text-black transition-all duration-500">
                {skillName}
            </div>
            <div className="h-8 w-8 flex items-center justify-center relative rounded-lg overflow-hidden">
                <Image
                    alt={`${skillName}`}
                    src={`${iconSrc}`}
                    fill={true}
                />
            </div>
        </div>
    )
}

export default SkillCard