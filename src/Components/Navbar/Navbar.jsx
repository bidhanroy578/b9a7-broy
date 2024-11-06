import { CiSearch  } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className='m-2 md:mx-4 md:my-14' >
            <div className='grid md:grid-cols-3 grid-flow-row gap-10 items-center'>
                <div className='text-3xl lexend-bold'>Recipe Calories</div>
                <div className='flex justify-between text-[#150B2BB3] lexend-regular text-base'>
                    <a href="">Home</a>
                    <a href="">Recipes</a>
                    <a href="">About</a>
                    <a href="">Search</a>
                </div>
                <div className='flex justify-between w-[90%]'>
                    <div className='relative flex items-center'>
                        <input type="text" placeholder='Search' className='absolute pl-10 text-[#150B2BB3] text-base lexend-regular box-border p-2 rounded-3xl bg-[#150B2B0D]'/>
                        <CiSearch className='text-3xl text-[#150B2B80] pl-1' />
                    </div>
                    <div>
                        <CgProfile className='bg-[#0BE58A] text-4xl rounded-full p-1 hover:text-3xl'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;