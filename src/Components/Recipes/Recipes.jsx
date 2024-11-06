import { useEffect, useState } from 'react';
import Recipe from './Recipe'
import Table from './Table';
import TableCooked from './TableCooked';
const Recipes = () => {

    let [recipes, setRecipes] = useState([])
    let [recipeToCook, setRecipeToCook] = useState([])
    let [cookingList, setCookingList] = useState([])


    useEffect(() => {
        fetch('data3.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    let handleCookButton = (id) => {
        setRecipeToCook([...recipeToCook, id])
    }

    let handlePreparingButton = (cooking) => {
        setCookingList([...cookingList, cooking])
        let newRecipeToCook = recipeToCook.filter((item) => item.id !== cooking.id)
        setRecipeToCook(newRecipeToCook)
    }


    return (
        <div className='m-2 md:m-4 pt-16'>
            <div className='text-center space-y-5'>
                <h3 className='lexend-semibold text-3xl md:text-[40px] '>Our Recipes</h3>
                <p className='lexend-regular text-[#150B2B99] md:pt-4'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-4 md:mt-10'>
                <div className='lg:w-[59.45%]'>

                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleCookButton={handleCookButton} recipeToCook={recipeToCook}></Recipe>)
                        }
                    </div>
                </div>

                {/* table  */}

                <div className='mt-5 lg:mt-0 lg:w-[39%] py-5 md:py-10 h-fit border-2 border-slate-400 rounded-3xl '>

                    {/* add to cook list  */}
                    <div className='text-center'>
                        <h3 className='lexend-semibold text-2xl'>Want to cook: {recipeToCook.length}</h3>
                        <hr className='border-t-2 border-[#28282828] w-[70%] mx-auto my-4' />
                        <table className='table-auto text-center w-full'>
                            <thead className='text-[#878787] fira-sans-medium'>
                                <tr className=''>
                                    <th className='w-[8%]'></th>
                                    <th className='w-[35%]'>Name</th>
                                    <th className=''>Time</th>
                                    <th className=''>Calories</th>
                                    <th className=''></th>
                                </tr>
                            </thead>
                            <tbody className='text-[#878787] fira-regular'>
                                {
                                    recipeToCook.map((recipe, idx) => <Table key={recipe.id} recipe={recipe} serial={idx} handlePreparingButton={handlePreparingButton} cookingList={cookingList}></Table>)
                                }

                            </tbody>
                        </table>
                    </div>

                    {/* cooking llist */}
                    <div className='text-center mt-5'>
                        <h3 className='lexend-semibold text-2xl'>Currently cooking: {cookingList.length}</h3>
                        <hr className='border-t-2 border-[#28282828] w-[70%] mx-auto my-4' />

                        <table className='table-auto text-center w-full'>
                            <thead className='text-[#878787] fira-sans-medium'>
                                <tr className=''>
                                    <th className='w-[8%] '></th>
                                    <th className='w-[40%] '>Name</th>
                                    <th className=''>Time</th>
                                    <th className=''>Calories</th>
                                </tr>
                            </thead>
                            <tbody className='text-[#878787] fira-regular'>
                                {
                                    cookingList.map((list, idx) => <TableCooked key={list.id} list={list} idx={idx}></TableCooked>)
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total Time ={cookingList.reduce((n1, n2) => n1 + n2.cooking_time, 0)} minutes</td>
                                    <td>Total Calories = {cookingList.reduce((n1, n2) => n1 + n2.calories, 0)} calories</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;