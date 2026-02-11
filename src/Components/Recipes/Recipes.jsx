import React from 'react'
import data from '../../Data'
import "./Recipes.css"
import {useNavigate} from 'react-router-dom'

function Recipes() {
   const nav= useNavigate()
  return (
    <div className="container">
      <div  className="parent">
      {data.recipes.map((p,i)=>{
        return(
          <div onClick={()=>{nav(`${p.id}`)}} className="child" key={i}>
            <img src={p.image} alt="" />
            <h3>{p.name}</h3>
            <p>{p.mealType}</p>
            <button>Add Cart</button>

          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Recipes