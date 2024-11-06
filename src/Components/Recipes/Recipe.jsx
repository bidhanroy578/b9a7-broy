import PropTypes from 'prop-types';
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

import toast, { Toaster } from 'react-hot-toast';


const Recipe = ({ recipe, handleCookButton, recipeToCook }) => {
    let { cover_pic, recipe_name, small_detail, ingredients, cooking_time, calories } = recipe

    const notify = () => toast.error('Already selected !!! select another.');

    const fnc = () => {
        let double = recipeToCook.find((list) => list.id === recipe.id)
        if (!double) {
            handleCookButton(recipe)
        }
        else { notify() }
    }
    return (
        <div className='p-2 md:p-6 border-2 border-slate-400 rounded-3xl flex flex-col items-center justify-center'>
            <div>
                <Toaster />
            </div>
            <div>
                <img src={cover_pic} alt="" className='max-h-[200px] rounded-2xl' />
            </div>
            <div>
                <h3 className='pt-4 lexend-semibold text-xl text-[#282828]'>{recipe_name}</h3>
                <p className='text-[#878787] fira-regular pt-3'>{small_detail}</p>
                <hr className='border-t-2 border-slate-100 my-4 w-[95%]' />
                <p className='text-[#282828] lexend-medium text-lg'>Ingredients: {ingredients.length}</p>
                <div className='pl-10 text-[#878787] fira-regular '>
                    <ul className='list-disc' >
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                    </ul>
                </div>
            </div>
            <hr className='border-t-2 border-slate-100 my-4 w-[95%]' />
            <div className='flex gap-8 fira-regular text-[#878787] mb-4'>
                <p className='flex gap-2 items-center'><MdOutlineWatchLater />{cooking_time} minutes</p>
                <p className='flex gap-2 items-center'><AiOutlineFire />{calories} calories</p>
            </div>
            <button onClick={fnc} className=' text-lg hover:opacity-80 lexend-medium bg-[#0BE58A] px-[1.5em] py-[.4em] rounded-3xl'>Want to Cook</button>
            
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleCookButton: PropTypes.func,
    recipeToCook: PropTypes.array
};

export default Recipe;