import { Lexend } from '@next/font/google'
import React from 'react'

interface HeadingType {
    heading: String
}

const font = Lexend({
    subsets: ['latin'],
    weight: "400"
})

const Heading: React.FC<HeadingType> = ({ heading }) => {
  return (
    <div className={`w-full p-2 text-center ${font.className}`}>
        <span className="text-white text-6xl font-extrabold">{heading}</span>
    </div>
  )
}

export default Heading