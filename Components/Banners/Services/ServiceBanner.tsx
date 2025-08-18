import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

interface Props {
    title: String,
    description: String,
    list: { tech: String }[],
    animationPath: string,
    reverse: boolean
}

const DynamicLottie = dynamic(() => import('lottie-react'), {ssr: false});

const ServiceBanner: React.FC<Props> = ({ title, description, list, animationPath, reverse }) => {
    const router = useRouter();
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            fetch(animationPath)
                .then(response => response.json())
                .then(data => setAnimationData(data))
                .catch(error => console.error('Error loading animation:', error));
        }
    }, [animationPath]);

    return (
        <div className={`w-full flex flex-col-reverse ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-center  min-h-[70vh] px-5 md:px-20 my-14 lg:my-0`}>
                <div className="w-full lg:w-[50%] h-[50vh] flex flex-col justify-center items-start text-white">
                    <div className="w-full p-2 text-start">
                        <span className="text-xl md:text-4xl tracking-widest font-extrabold">{title}</span>
                    </div>
                    <div className="w-full p-2 text-start">{description}</div>
                    <ul className="ml-[18px] p-2 list-disc">
                        {list.map(( item, index ) => (
                            <li key={index}>{item.tech}</li>
                        ))}
                    </ul>
                    <Link href={`/#connect`}  className="bg-white text-black px-4 py-1.5 rounded-md lg:font-light my-2">Get in touch</Link>   
                </div>
                <div className={`relative w-full md:w-[80%] lg:w-[35%] h-[30%] shrink-0 lg:h-[50%] overflow-hidden flex justify-center lg:py-20 lg:px-10 my-5`}>
                    {animationData && <DynamicLottie animationData={animationData} loop={true}/>}
                </div>
            </div>
    )
}

export default ServiceBanner