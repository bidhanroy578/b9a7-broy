import { useEffect, useState } from 'react';
import Recipe from './Recipe'
import Table from './Table';
import TableCooked from './TableCooked';
const Recipes = () => {

    let [recipes, setRecipes] = useState([])
    let [recipeToCook, setRecipeToCook] = useState([])
    let [cookingList , setCookingList] = useState([])


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
    }


    return (
        <div className='m-2 md:m-6 pt-16'>
            <div className='text-center space-y-5'>
                <h3 className='lexend-semibold text-3xl md:text-[40px] '>Our Recipes</h3>
                <p className='lexend-regular text-[#150B2B99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:w-[59.45%]'>

                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleCookButton={handleCookButton} recipeToCook={recipeToCook}></Recipe>)
                        }
                    </div>
                </div>

                {/* table  */}

                <div className='md:w-[39%] md:py-10 h-fit border-2 border-slate-400 rounded-3xl '>
                    <div className=''>
                        <table className='table-auto text-center w-full'>
                            <caption>Want to cook: {recipeToCook.length}</caption>
                            <thead className=''>
                                <tr className=''>
                                    <th className='w-[8%]'></th>
                                    <th className='w-[35%]'>Name</th>
                                    <th className=''>Time</th>
                                    <th className=''>Calories</th>
                                    <th className=''></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recipeToCook.map((recipe, idx) => <Table key={recipe.id} recipe={recipe} serial={idx} handlePreparingButton={handlePreparingButton}></Table>)
                                }

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table className='table-auto text-center w-full'>
                            <caption>Currently cooking: 02</caption>
                            <thead className=''>
                                <tr className=''>
                                    <th className='w-[8%] '></th>
                                    <th className='w-[40%] '>Name</th>
                                    <th className=''>Time</th>
                                    <th className=''>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cookingList.map((list,idx)=><TableCooked key={list.id} list={list} idx={idx}></TableCooked>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;