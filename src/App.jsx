import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'
function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Recipes></Recipes>
    </div>
  )
}

export default App