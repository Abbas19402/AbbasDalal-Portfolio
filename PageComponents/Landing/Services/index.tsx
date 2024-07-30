import Link from "next/link";

import Button from "../../../Components/Buttons/Common/common_button";
import CodeAnimation from '../../../public/Assets/Animations/serviceAnimation2.json'
import Cards from "../../../Components/Cards";
import services from "../../../Constants/Services/services";
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(import('lottie-react'),{ssr: false})

const Services = ({ setSubject }) => {
    return(
        <div className="w-full h-fit ">
            <div className="w-full text-white mb-20 text-center">
                <span className="text-white text-6xl tracking-tight font-extrabold">Services</span>
            </div>
            <div className="w-full h-full flex flex-row">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-center w-full h-full py-10">
                    <div className="w-[100vw] h-full flex flex-col justify-center items-center gap-10">
                        {services.map((item,key)=> (
                            <Cards.ServiceCard
                                key={key}
                                service={item.service} 
                                description={item.description}
                                techUsed={item.techUsed}
                                setSubject={setSubject}
                            />
                        ))}
                        <Link href={'services'} className="lg:hidden block">
                            <div className="w-full py-2">
                                <Button Title={'Check out all of my Services'} Background={'bg-gray-200'} TextColor={'text-gray-800'} />  
                            </div>
                        </Link>
                    </div>
                    <div className="w-[100vw] lg:min-w-[50vw] h-max flex flex-col justify-between items-center">
                        <div className="w-[70%] h-[70%]">
                            <DynamicLottie animationData={CodeAnimation} loop={true}/>
                        </div>
                        <Link href={'services'} className="hidden lg:block">
                            <div className="w-full py-2 my-28">
                                <Button Title={'Check out my Services'} Background={'bg-gray-200'} TextColor={'text-gray-800'} />  
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services