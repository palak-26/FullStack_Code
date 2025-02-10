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


import React from 'react'

const App = () => {
  function fun1(){
    console.log("Helloo");
    
  }
  return (
    <div>
      <button onClick={fun1}>Add</button>
    </div>
  )
}

export default App