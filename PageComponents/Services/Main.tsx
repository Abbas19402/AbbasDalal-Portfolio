import { NextPage } from "next"
import WebDevelopment from '../../public/Assets/Animations/Web Development.json'
import MobileAppDevelopment from '../../public/Assets/Animations/Mobile App Development.json'
import { useLottie } from "lottie-react"
import Link from "next/link"
import Banners from "../../Components/Banners"
import BannerServicesConstants from "../../Constants/Services/serviceBanner"

const ServicePage: NextPage = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center">
            <div className="w-full py-2 px-4 text-white tracking-wider font-light text-center text-6xl my-7">Services</div>
            {BannerServicesConstants.map((item,index)=> (
                <Banners.Service 
                animation={item.animation}
                description={item.description}
                list={item.techUsed}
                title={item.service}
                reverse={index%2 == 0 ? false : true}
                key={index}
                />
            ))}
        </div>
    )
}

export default ServicePage