import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = ({data,setData }) => {
  let navi = useNavigate()
 
      // id=1
    let {id}=    useParams()
    let newId= Number(id)
    // let newData = data.filter((a,index)=>{
    //   return index==id
    // })
    let [input,setInput] =useState(data[id])
   
   function fun1(){
    let arr =[...data]
    arr[newId]=input
    setData(arr)
    navi('/')
   }
  return (
    <div>
        <fieldset> 
        <legend>edit</legend>
        

        <input type='text' name='input' onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter your name'/>
        <button onClick={fun1}>Save</button>

        
        </fieldset>
    </div>
  )
}

export default Edit