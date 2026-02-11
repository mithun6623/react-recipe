import React from 'react'
import { useState } from 'react'
import data from '../../Data'
import { useParams } from 'react-router-dom'
import "./SingleRecipe.css"

function SingleRecipe() {
    const queryParms=useParams()
    console.log(queryParms)
    const flitered=data.recipes.find((x)=>(x.id==Number(queryParms.id)))

    const[q,s]=useState(0);
    function incre(){
      s(q+1)
    }
     function desc(){
      s(q-1)
    }


  return (
    <div className='parent'>
       <div className='child'>
         <h2>{flitered?.name}</h2>
        <img src={flitered?.image} alt=""  width={200} />
        <p>{flitered?.cuisine}</p>
        <button onClick={()=>alert("order succesfull")}>order</button>
        <div className='qcon'>
          <div className='quantity'>
          <div  className='qicon'  onClick={()=> incre()}>+</div>
          <div className='icon'>{q}</div>
          <div    className='qicon'  onClick={()=> desc()}>-</div>
        </div> 

       
        


       

        </div>
       </div>
    </div> 
  )
}

export default SingleRecipe