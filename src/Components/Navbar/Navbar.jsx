import { CiSearch  } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className='m-2 md:mx-4 md:my-10' >
            <div className='grid md:grid-cols-2 gap-2 lg:grid-cols-3 items-center '>
                <div className='text-3xl lexend-bold'>Recipe Calories</div>
                <div className='flex justify-between sm:p-10 p-2 lg:w-[80%] md:hidden lg:flex  text-[#150B2BB3] lexend-regular text-base'>
                    <a href="">Home</a>
                    <a href="">Recipes</a>
                    <a href="">About</a>
                    <a href="">Search</a>
                </div>
                <div className='flex justify-between '>
                    <div className='relative flex items-center w-[80%]'>
                        <input type="text" placeholder='Search' className='w-full absolute pl-14 text-[#150b2bbd] text-base lexend-regular box-border p-3 rounded-3xl bg-[#150B2B0D]'/>
                        <CiSearch className='text-3xl text-[#150B2B80] pl-1 ml-5' />
                    </div>
                    <div>
                        <CgProfile className='bg-[#0BE58A] text-4xl sm:text-5xl leading-4 rounded-full p-2 hover:text-3xl'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;