import PropTypes from 'prop-types';
import './border.css';

import toast, { Toaster } from 'react-hot-toast';


const Table = ({recipe , serial , handlePreparingButton, cookingList}) => {

    const notify = () => toast.error('Already cooking !!! select another.');


    const fnc2 = ()=>{
        let double = cookingList.find((list)=>list.id===recipe.id)
        if(!double){
            handlePreparingButton(recipe)
        }
        else{notify()}
    }
    let {recipe_name,cooking_time,calories} = recipe
    return (
        <tr className="bg-slate-50 h-16 ">
            <td className="text-[#282828cb]">{serial + 1 }</td>
            <td className="px-[2px]">{recipe_name}</td>
            <td className='px-[2px]'>{cooking_time} minutes</td>
            <td className='px-[2px]'>{calories} calories</td>
            <td className='px-[2px]'><button onClick={fnc2} className="hover:opacity-80 bg-[#0BE58A] text-[12px] sm:text-sm md:text-base px-[0.95em] py-[0.30em] rounded-3xl lexend-medium text-[#150B2B]">Preparing</button></td>
            <td><Toaster /></td>
        </tr>
    );
};

Table.propTypes = {
    recipe: PropTypes.object ,
    serial: PropTypes.number ,
    handlePreparingButton: PropTypes.func ,
    cookingList: PropTypes.array
    // handleCookButton: PropTypes.func
};

export default Table;