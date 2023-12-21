import { GoPackageDependencies } from "react-icons/go";
import { ImEnter, ImLocation } from "react-icons/im";
import { PiAnchorSimpleDuotone } from "react-icons/pi";
const About = () => {
    return (
        <>
            <div className='text-center my-10 text-4xl font-mono underline' >
                <h1 >
                    About Us
                </h1>
            </div>

            <div>
                <p className='flex items-center justify-center text-3xl font-mono'>
                    Welcome to Your <a className="font-mono text-white hidden md:block text-5xl ml-5 ">TO<span className='text-7xl  text-orange-900 ml-5'>DO</span></a>
                </p>
            </div>

            <div className='text-center my-10 text-4xl font-mono underline' >
                <h1 >
                    Our Mission
                </h1>
            </div>
            <div className='lg:w-2/3 mx-auto border border-3 border-black rounded-full p-14'>
                <p className='lg:text-3xl'>At ,TO<span className='text-4xl text-orange-900 '>DO</span> , our mission is to simplify your life by providing a robust and intuitive task management solution. We understand the challenges of modern life, where tasks and responsibilities can quickly pile up. Our goal is to empower individuals and teams to stay organized, boost productivity, and achieve their goals with ease.</p>
            </div>

            <div className='text-center my-10 text-4xl font-mono underline' >
                <h1 >
                    Our Core Values
                </h1>
            </div>

            <div className="lg:text-3xl flex justify-center items-center lg:gap-10">
                <p className="flex items-center gap-3 border-3 border p-1 border-black"><PiAnchorSimpleDuotone></PiAnchorSimpleDuotone>Simplicity</p>
                <p className="flex items-center gap-3 border-3 border p-1 border-black"><ImEnter></ImEnter>Innovation</p>
                <p className="flex items-center gap-3 border-3 border p-1 border-black"><GoPackageDependencies />Reliability</p>
            </div>

            
            <div className='text-center my-10 text-4xl font-mono underline' >
                <h1 >
                    Our Location
                </h1>
            </div>

            <div>
                <p className="lg:flex justify-center gap-3 items-center lg:text-3xl font-mono"><ImLocation></ImLocation> Bangladesh,Dhaka,Uttara-22</p>
            </div>
        </>
    );
};

export default About;