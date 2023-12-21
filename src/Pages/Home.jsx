import banner from "../assets/document-specification-isometric-design-vector-removebg.png"

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-10">

            <div className="space-y-10">
                <a className="font-mono text-white hidden md:block text-5xl ">TO<span className='text-7xl  text-orange-900 ml-5'>DO</span></a>
                <p className="md:text-4xl text-[#3D2342] md:w-[700px] font-mono">Empowering you to conquer your day with ease. Your productivity, Reimagined.</p>
                <div>
                    <button className="btn btn-outline text-[#A955BA] font-semibold md:text-3xl">Let’s Explore</button>
                </div>
            </div>

            <div>
                <img src={banner} alt="" />
            </div>

        </div>
    );
};

export default Home;