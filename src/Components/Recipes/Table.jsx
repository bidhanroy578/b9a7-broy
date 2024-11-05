import PropTypes from 'prop-types';
import './border.css';
const Table = ({recipe , serial , handlePreparingButton}) => {
    let {recipe_name,cooking_time,calories} = recipe
    return (
        <tr className="bg-slate-50 h-16 ">
            <td className="">{serial + 1 }</td>
            <td className="px-[2px]">{recipe_name}</td>
            <td className='px-[2px]'>{cooking_time} minutes</td>
            <td className='px-[2px]'>{calories} calories</td>
            <td className='px-[2px]'><button onClick={()=>handlePreparingButton(recipe)} className="hover:opacity-80 bg-green-500 px-[0.95em] py-[0.30em] rounded-3xl">Preparing</button></td>
        </tr>
    );
};

Table.propTypes = {
    recipe: PropTypes.object ,
    serial: PropTypes.number ,
    handlePreparingButton: PropTypes.func 
    // handleCookButton: PropTypes.func
};

export default Table;