import React, { MouseEvent } from "react";
import { Manrope } from '@next/font/google'

interface Props {
    Title: String,
    Background: String,
    TextColor: String
}

const manrope = Manrope({
    subsets: ['latin'],
    weight: '400'
})

const Button: React.FC<Props> = ({ Title , Background , TextColor}) => {
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <div onClick={() => handleMouseEvent} className={`hover:cursor-pointer transition-all duration-300 hover:scale-110 ${Background != '' ? `${Background} border border-white` : 'bg-gray-200'} text-xl rounded w-fit min-w-[10vw] flex flex-row gap-x-4 justify-evenly items-center h-fit py-0.5 px-2`}>
            <div className="tracking-wider">
                <span className={`${Background != '' ? TextColor : 'text-gray-800'} font-bold`}>{Title}</span>
            </div>
            <div className={`${manrope.className} text-2xl p-2 whitespace-nowrap`}>
                <span className={`${Background != '' ? TextColor : 'text-gray-800'}`}>{`->`}</span>
            </div>
        </div>
    )
}

export default Button