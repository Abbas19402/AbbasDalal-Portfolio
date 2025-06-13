import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Abel, Advent_Pro } from "@next/font/google"

interface Props {
    gradient: {From: String, Via: String, To: String},
    title: String,
    description: {point: String}[],
    shortDesc: String
    techUsed: {type: String , value: String}[],
    github: String,
    imageSrc: StaticImageData
}

const customFont = Advent_Pro({
    subsets: ['latin'],
    weight: '400'
})

const ProjectCard: React.FC<Props> = ({ gradient, description, shortDesc, techUsed, title, github, imageSrc }) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src={imageSrc?.src}
                    alt={`${title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/95" />
            </div>

            {/* Content */}
            <div className="relative p-8 min-h-[400px] flex flex-col justify-between backdrop-blur-sm">
                {/* Top Section */}
                <div className="space-y-4">
                    <h3 className={`${customFont.className} text-3xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300`}>
                        {title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed max-w-2xl">
                        {description[0].point}
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4 mt-6">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {techUsed.map((item, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 text-xs font-medium text-white transition-colors duration-300"
                            >
                                {item.value}
                            </span>
                        ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="pt-2">
                        <Link 
                            href={`${github}`} 
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard