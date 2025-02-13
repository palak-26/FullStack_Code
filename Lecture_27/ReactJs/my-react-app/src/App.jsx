// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




// functional based   => rafce
//class based


//html + js = jsx that's why we have file extension as .jsx
// babel is a software that renders the code into react understandable code whose file is stored in node modules file

// import './App.css'
// import Home, { Diff } from './Home'

// const App = () => {
//   let user="Palak"
//   return (
//     <div>
//       {/* {user} */}
//       {/* {5+1} */}
//       <h1>Hellloooo Worldddd!!!!!</h1>
//       <Diff/>
//       <Home/>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   let arr=[1,2,3,4,5,6]
//   return (
//     <div>
//       {
//         arr.map((a)=>{
//           return (<div> 
//             {a}
//             </div>)
//         })
//       }
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   function fun1(){
//     console.log("Helloo");
    
//   }
//   return (
//     <div>
//       <button onClick={fun1}>Add</button>
//     </div>
//   )
// }

// export default App




// const App = () => {
  // let [count,SetCount]=useState(0)
  // let [color,SetColor] = useState('black')
  // let [count,SetCount] = useState(0)
  // function func1(){
  //   SetCount(count+1)
  //   if(count%2==0){
  //     SetColor('#073162')

  //   }
  //   else{
  //     SetColor('black')
  //   }
  // }
//   let [count,SetCount]=useState(0)
//   function Dec(){
//     SetCount(count-1)
//   }
//   function Res(){
//     SetCount(count=0)

//   }
//   function Inc(){
//     SetCount(count+1)
//   }
//   return (
//     <div >
   
//       <button onClick={Dec}>Decrement</button>
//       <button onClick={Res}>Reset</button>
//       <button onClick={Inc}>Increment </button>

//       <h1>{count}</h1>
      
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// const App = () => {
//   let [input, setInput] = useState("");
//   let [data, setData] = useState([]);

//   function func1(e) {
//     setInput(e.target.value);
//   }

//   function func2() {
   
//       setData([...data, input]);
//       setInput(""); // Clear input after adding
    
//   }

//   function del(index) {
//     setData(data.filter((a, i) => i !== index)); // Remove item by index
//   }

//   return (
//     <div>
//       <input type="text" onChange={func1} value={input} placeholder="Enter your Data" />
//       <button onClick={func2}>Add</button>
//       <ul>
//         {data.map((a, index) => (
//           <li key={index} onClick={()=> del(index)}>
//             {a}
//           </li>
//         ))}
//       </ul> 
//     </div> 
//   );
// };

// export default App;



// import React, { useState } from 'react'

// const App = () => {
//   let data
//   let [input,setInput] = useState({
//     name: '',
//     email: '',
//     passWord:''
//   })
//   function func1(e){
//     let {name,value}= e.target
//     setInput({...input,[name]:value})
//     console.log(input);
    
//   }
//   function store(){
//     data=input
//     console.log(data);
    
//   }
//   return (
//     <div>
//       <fieldset>
//         <legend>Form</legend>
//         <input type="text" onChange={func1} name='name' value={input.name} placeholder='Enter your name:' />
//         <br />
//         <br />
//         <input type="email" onChange={func1} name='email' value={input.email} placeholder='Enter your email:' />
//         <br />
//         <br />
//         <input type="password" onChange={func1} name='passWord' value={input.passWord} placeholder='Enter your password:' />
//         <br />
//         <br />
//         <button onClick={store}>Submit</button>


//         <h3>Entered Data:</h3>

//       </fieldset>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount] = useState(0)
//   let [city,SetCity] = useState(true)
//   useEffect(()=>{
//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return res.json()
//   }).then((data)=>{
//     console.log(data);
    
//   })
//   },[count])
//   return (
//     <div>
//       <h2>{
//        city? "Bhopal":"Delhi"
//         }</h2>
//       <button onClick={()=>{SetCount(count+1)}}>Count : {count}</button>
//       <button onClick={()=>{city? SetCity(false):SetCity(true)}}>City</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import "./App.css"
// const App = () => {
//   let [apiData,SetApiData]=useState([])
//   fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()
// }).then((data)=>{
//   console.log(data);
//   SetApiData(data.recipes)
// })
//   return (
//     <div id='card'>
//       {
//         apiData.map((val)=>
//         { return(<div>
//           <img height="250px" src={val.image} alt="" />
//           <h3>{val.name}</h3>
//         </div>)
          
//         })
//       }
//     </div>
//   )
// }

// export default App


//props ==> sharing of data from one file to another and vice versa

// import React from 'react'
// import Home from './Home'

// const App = ({main}) => {
//   let user="Palak"
//   return (
//     <div>
//       <Home data={user} main={main} />
//     </div>
//   )
// }

// export default App


import React, { useReducer } from 'react'

const App = () => {
  function reducer(count,action){
    if(action.type=='incre'){
      return count+1
    }
    else if (action.type =='decre'){
      return count-1
    }
    else if (action.type =='reset'){
      return 0
    }
  }
  let [count,dispatch] =useReducer(reducer,0)
  function func1(){
    dispatch({
      type:'incre'
    })
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={func1}>Increment</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
      <button onClick={()=>{dispatch({type:'decre'})}}>Decrement</button>
    </div>
  )
}

export default App