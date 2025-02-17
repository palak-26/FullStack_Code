
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Todo = () => {
//     let navigate=    useNavigate()
//   let [input,SetInput]=useState('')
//   let [todo,SetTodo]=useState([])

//   function edit(id){
//     console.log(id,"mujhee dekhooo");
    

//     navigate(`/edit/${id}`)
    
//   }

//   return (
//     <div>
//             <input type='text' onChange={(e)=>SetInput(e.target.value)} placeholder='Enter your todo'/>
//             <button onClick={()=>SetTodo([...todo,input])}>click</button>
//       {
//         todo.map((a,index)=>{
//           return(<>
//           <li>{a}</li>
//           <button>delet</button>
//           <button onClick={()=>edit(index)}>Edit</button>

//           </>)

//         })
//       }

//     </div>
//   )
// }

// export default Todo

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = ({data,setData}) => {
    let navigate=    useNavigate()
  let [input, setInput] = useState("");
 

  function edit(id){
   
    

    navigate(`/edit/${id}`)
    
  }

  function func1(e) {
    setInput(e.target.value);
  }

  function func2() {
   
      setData([...data, input]);
      setInput(""); // Clear input after adding
    
  }

  function del(index) {
    setData(data.filter((a, i) => i !== index)); // Remove item by index
  }

  return (
    <div>
      <fieldset>
        <legend>ToDo List</legend>
        <input type="text" onChange={func1} value={input} placeholder="Enter your Data" />
      <button onClick={func2}>Add</button>
      
        {data.map((a, index) => (
          <ul>
          <li   >
            {a}
          </li>
          <button  key={index} onClick={()=> del(index)}>Delete</button>
          <button onClick={()=>edit(index)}>Edit</button>
          </ul>
        ))}
       
      </fieldset>
    </div> 
  );
};

export default Todo;