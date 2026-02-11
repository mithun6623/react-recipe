import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Recipes from './Components/Recipes/Recipes.jsx'
import SingleRecipe from './Components/SingleRecipe/SingleRecipe.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/recipes/:id' element={<SingleRecipe/>}></Route>
      </Routes>

    </div>
  )
}

export default App