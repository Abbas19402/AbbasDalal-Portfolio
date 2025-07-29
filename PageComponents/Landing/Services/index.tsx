import services from "../../../Constants/Services/services";
import Heading from "../../../Components/Typography/Heading";

const serviceSvgs = [
    // Website Development
    <svg key="web" className="w-8 h-8 text-indigo-300 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" className="fill-white/10"/><path d="M3 9h18" stroke="currentColor" strokeWidth="2"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="11" cy="7" r="1" fill="currentColor"/></svg>,
    // Mobile App Development
    <svg key="mobile" className="w-8 h-8 text-indigo-300 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" className="fill-white/10"/><circle cx="12" cy="18" r="1" fill="currentColor"/></svg>,
    // Backend API Development
    <svg key="api" className="w-8 h-8 text-indigo-300 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" className="fill-white/10"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2"/></svg>,
    // UI/UX Consulting
    <svg key="uiux" className="w-8 h-8 text-indigo-300 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" className="fill-white/10"/><circle cx="8" cy="12" r="2" fill="currentColor"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor"/></svg>
];

const Services = () => {
    const isOddCount = services.length % 2 !== 0;

    return(
        <section className="w-full min-h-screen flex flex-col items-center py-24 px-4">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
                <Heading heading={'Services'} />
                <p className="text-white/70 text-center text-lg max-w-2xl mb-8 font-light">I offer a range of services to help you build, launch, and grow your digital products. Each service is tailored to deliver maximum value and quality.</p>
                <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-2 justify-center">
                    {services.map((item, key) => (
                        <div 
                            key={key} 
                            className={`w-full max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col gap-4 hover:shadow-2xl hover:border-indigo-400/40 transition-all duration-300 ${
                                isOddCount && key === services.length - 1 ? 'lg:col-span-2 lg:max-w-2xl' : ''
                            }`}
                        >
                            <div className="flex flex-row gap-2 items-center">
                                <div className="w-fit h-10 flex items-center justify-start">{serviceSvgs[key % serviceSvgs.length]}</div>
                                <h3 className="text-xl font-bold text-indigo-200 mb-2 tracking-wide">{item.service}</h3>
                            </div>
                            <p className="text-white/80 text-base font-light leading-relaxed mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {item.techUsed.split(',').map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-medium text-indigo-100 bg-indigo-500/10 rounded-full border border-indigo-400/20">{tech.trim()}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services