import { useEffect, useState } from 'react';
import Recipe from './Recipe'
import Table from './Table';
const Recipes = () => {

    let [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('data3.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className='m-2 md:m-10 pt-16'>
            <div className='text-center space-y-5'>
                <h3 className='lexend-semibold text-3xl md:text-[40px] '>Our Recipes</h3>
                <p className='lexend-regular text-[#150B2B99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:w-[59.45%]'>

                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
                        }
                    </div>
                </div>

                {/* table  */}

                <div className='md:w-[39%] md:py-10 h-fit border-2 border-slate-400 rounded-3xl '>
                    <div className=''>
                        <table className='table-auto text-center w-full'>
                            <caption>Want to cook: 01</caption>
                            <thead className=''>
                                <tr className=''>
                                    <th className='w-[5%]  '></th>
                                    <th className='w-[25%] '>Name</th>
                                    <th className='w-[15%] '>Time</th>
                                    <th className='w-[15%] '>Calories</th>
                                    <th className='w-[15%] '></th>
                                </tr>
                            </thead>
                            <tbody>
                                <Table></Table>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;