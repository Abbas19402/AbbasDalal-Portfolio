import { Advent_Pro } from "@next/font/google";
import { useRouter } from "next/router"

interface Props {
    service: string,
    description: String,
    techUsed: String,
    setSubject: React.Dispatch<React.SetStateAction<string>>;
}  

const font = Advent_Pro({
    subsets: ['latin'],
    weight: '800'
})

const ServiceCard: React.FC<Props> = ({ service, description, techUsed, setSubject }) => {
    const router = useRouter()
    return (
        <div className="w-full bg-white/10 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:border-indigo-400/60 hover:border-2 border border-white/10 group cursor-pointer">
            <div className="p-8 flex flex-col justify-between items-start gap-4">
                <div className={`font-bold text-indigo-300 text-2xl mb-1 ${font.className} tracking-widest group-hover:text-indigo-200 transition-colors duration-300`}>{service}</div>
                <p className="font-light text-base leading-6 tracking-wide mb-2 text-white/90 text-start">{description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {techUsed.split(',').map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium text-white bg-indigo-500/20 rounded-full border border-indigo-400/30">{tech.trim()}</span>
                    ))}
                </div>
                <div className="flex items-center justify-between w-full">
                    <div onClick={() => {
                        router.push({
                            pathname: '/#connect',
                            query: `Connection request regarding ${service}`,
                        },'/#connect')
                        setSubject(service)
                    }} className="bg-indigo-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition-colors duration-300 hover:cursor-pointer">Get in touch</div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard