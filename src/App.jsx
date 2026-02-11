import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import SingleRecipe from './Components/SingleRecipe/SingleRecipe'

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