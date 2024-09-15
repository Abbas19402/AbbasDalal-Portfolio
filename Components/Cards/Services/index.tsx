import { Advent_Pro } from "@next/font/google";
import { useRouter } from "next/router"

interface Props {
    service: string,
    description: String,
    techUsed: String,
    setSubject: React.Dispatch<React.SetStateAction<string>>;
}  

const font = Advent_Pro({
    subsets: ['cyrillic'],
    weight: ['400']
})

const ServiceCard: React.FC<Props> = ({ service, description, techUsed, setSubject }) => {
    const router = useRouter()
    return (
        <div className="max-w-sm mx-auto bg-black text-white shadow-lg rounded-lg overflow-hidden my-3">
            <div className="p-6 bg-white/10 flex flex-col justify-between items-start">
                <div className={`font-bold text-sky-700 text-xl mb-2 ${font.className} tracking-widest`}>{service}</div>
                <p className="font-light text-sm leading-6 tracking-wide mb-4 text-start">{description}</p>
                <div className="flex items-center justify-between">
                    <div onClick={() => {
                        router.push({
                            pathname: '/#connect',
                            query: `Connection request regarding ${service}`,
                        },'/#connect')
                        setSubject(service)
                    }} className="bg-white text-black px-4 py-2 rounded-lg lg:font-light hover:cursor-pointer">Get in touch</div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard