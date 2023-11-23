import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
    service: String,
    description: String,
    techUsed: String
}

const ServiceCard: React.FC<Props> = ({ service, description, techUsed }) => {
    const router = useRouter()
    return (
        <div className="max-w-sm mx-auto bg-black text-white shadow-lg rounded-lg overflow-hidden my-3">
            <div className="p-6 bg-white/10">
                <div className="font-bold text-xl mb-2">{service}</div>
                <p className="text-base mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <div onClick={() => {
                        router.push({
                            pathname: '/#connect',
                            query: `Connection request regarding ${service}`,
                        },'/#connect')
                    }} className="bg-white text-black px-4 py-2 rounded-lg lg:font-bold">Get in touch</div>
                    <p className="text-sm">{techUsed}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard