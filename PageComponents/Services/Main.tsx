import { NextPage } from "next"
import Banners from "../../Components/Banners"
import BannerServicesConstants from "../../Constants/Services/serviceBanner"
import { useRouter } from "next/router"

const ServicePage: NextPage = () => {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col justify-start items-center">
            <div className="fixed flex justify-center items-center z-50 top-3 left-3 w-12 h-12 bg-neutral-800 lg:pb-1.5 transition-all duration-700 hover:bg-slate-400 group hover:cursor-pointer rounded-lg" onClick={()=>router.back()}>
                <span className="text-3xl text-slate-300 group-hover:text-neutral-800 transition-all duration-700">&larr;</span>
            </div>
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