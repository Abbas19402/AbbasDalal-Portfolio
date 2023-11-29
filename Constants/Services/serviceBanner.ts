import WebAnimation from '../../public/Assets/Animations/Web Development.json'
import MobileAnimation from '../../public/Assets/Animations/Mobile App Development.json'
import Backend from '../../public/Assets/Animations/Backend.json'
import { LottieComponentProps } from 'lottie-react'


const BannerServicesConstants: {service: String, description: String, techUsed: {tech: String}[], animation: LottieComponentProps }[] = [
    {
        animation: {animationData: WebAnimation, loop: true},
        description: 'Web development involves creating and maintaining websites or applications. Developers use languages like HTML, CSS, and JavaScript to build functional and visually appealing online platforms for a positive user experience.',
        service: 'Website Development',
        techUsed:[
            {tech: "React JS with and without Backend"},
            {tech: "Next JS with and without Backend"},
            {tech: "Static Web Application using Plain Javascript"}
        ]
    },
    {
        animation: {animationData: MobileAnimation, loop: true},
        description: 'Mobile application development involves creating software applications for mobile devices like smartphones and tablets. It includes designing, coding, testing, and deploying applications to provide users with functional and engaging experiences.',
        service: 'Mobile Application Development',
        techUsed:[
            {tech: "React Native with and without Backend"},
            {tech: "Redux JS"}
        ]
    },
    {
        animation: {animationData: Backend, loop: true},
        description: 'Backend Development involves building and maintaining server-side logic, databases, and application architecture. It powers the functionality and data processing of websites and applications, ensuring seamless user experiences.',
        service: 'Backend Development',
        techUsed:[
            {tech: "Node JS"},
            {tech: "Express"},
            {tech: "MongoDB"},
            {tech: "Bcrypt"}
        ]
    }
]

export default BannerServicesConstants