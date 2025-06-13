import React from "react"
import Image from "next/image"

interface Props {
    skillName: String,
    iconSrc: string
}

const SkillCard: React.FC<Props> = ({ skillName, iconSrc }) => {
    return (
        <div
            className="group relative w-full h-20 flex flex-row items-center px-6 gap-x-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-indigo-400/40 transition-all duration-300 cursor-pointer"
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-indigo-500/10 group-hover:to-indigo-500/5 rounded-xl transition-all duration-300" />
            
            {/* Content */}
            <div className="relative flex items-center justify-between w-full">
                <div className="text-base font-medium tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
                    {skillName}
                </div>
                <div className="h-12 w-12 flex items-center justify-center relative rounded-lg overflow-hidden bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                    <Image
                        alt={`${skillName}`}
                        src={`${iconSrc}`}
                        fill={true}
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default SkillCard