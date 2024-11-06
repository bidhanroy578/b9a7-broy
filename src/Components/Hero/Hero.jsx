import './Hero.css'
const Hero = () => {
    return (
        <div className='m-2 md:m-4 mt-8'>
            <div className='bgimg bg-center text-white flex flex-col text-center justify-center gap-5 items-center space-y-5 min-h-[80vh] p-1 py-10 md:p-10 rounded-3xl'>
                <h3 className='lexend-bold text-3xl md:text-5xl leading-normal'>Discover an exceptional cooking <br /> class tailored for you! </h3>
                <p className='text-sm sm:text-base'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex  md:gap-20 text-sm gap-3'>
                    <button className='bg-[#0BE58A] active:opacity-100 hover:opacity-80 py-[1em] px-[2em] rounded-full text-black lexend-semibold md:text-lg'>Explore now</button>
                    <button className='bg-transparent active:opacity-100 hover:opacity-80 border-white border-2 py-[1em] px-[2em] rounded-full text-white lexend-semibold md:text-lg'>Our Feedback</button>
                </div>
            </div>

        </div>
    );
};

export default Hero;