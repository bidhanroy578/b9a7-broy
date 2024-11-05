import PropTypes from "prop-types";
const TableCooked = ({list, idx}) => {
    return (
        <tr className="bg-slate-50 h-16 ">
            <td className="px-[2px]">{idx + 1}.</td>
            <td className="px-[2px]">{list.recipe_name}</td>
            <td className='px-[2px]'>{list.cooking_time} minutes</td>
            <td className='px-[2px]'>{list.calories} calories</td>
        </tr>
    );
};
TableCooked.propTypes = {
    list: PropTypes.object,
    idx: PropTypes.number
}
export default TableCooked;