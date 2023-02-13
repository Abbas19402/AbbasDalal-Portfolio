import React, { MouseEvent } from "react";

interface Props {
    Title: String
}

const Button: React.FC<Props> = ({ Title }) => {
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <div onClick={() => handleMouseEvent} className={`text-xl border-2 border-white rounded w-fit min-w-[10vw] flex justify-evenly items-center h-fit py-0.5 px-2`}>
            <span className="text-gray-300">{Title}</span>
        </div>
    )
}

export default Button