import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

const App = () => {
  const [length,setLength] = useState(8);
  const [numAllowed,setNumAllowed]= useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]= useState(null)

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback (()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz'
    if(numAllowed) str+='1234567890'
    if(charAllowed) str+='~@#$!%^&*(){}+-_/?,.;'

    for(let i=0; i<=length;i++){
       let char = Math.floor(Math.random()* str.length+1)

       pass+= str.charAt(char);

       setPassword(pass)
    }

  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClip= useCallback(()=>{
    passwordRef.current?.select()    
    passwordRef.current?.setSelectionRange(0,16)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,setPassword])
  return (
    <div className='min-h-screen min-w-full bg-black flex justify-center p-32'>
      <div className='max-w-md w-full md: bg-gray-700 p-2 rounded-3xl '>
        <h1 className='text-white text-3xl font-bold text-center p-6'>Password Generator</h1>
        <div className='flex '>
          <input 
        type="text"
        value={password}
        placeholder='Password'
        className='w-full h-10  rounded-s-xl p-4 outline-none font-bold'
        ref={passwordRef}
        readOnly
         />
        <button onClick={copyPasswordToClip} className='bg-blue-800 rounded-e-xl p-4 h-10 flex items-center font-bold text-white cursor-pointer outline-none'>Copy</button>
        </div>
        <div className='w-full max-w- flex p-2 gap-x-2 text-white font-semibold'>
          <input 
        id='length'
        type="range" 
        value={length}
        min={8}
        max={100}
        onChange={(e)=>{setLength(e.target.value)}}
        
        />
        <label htmlFor="length">Length: {length}</label>

        <input 
        id='numallowed'
        type="checkbox"
        value={numAllowed}
        onChange={
          ()=>{
            setNumAllowed((prev)=> !prev)
          }
        }
        />
        <label htmlFor="numallowed">Numbers</label>

        <input 
        id='charallowed'
        type="checkbox"
        value={charAllowed}
        onChange={()=>{
          setCharAllowed((prev)=> !prev)
        }}
        />
        <label htmlFor="charallowed">Characters</label>
        
        </div>
      </div>
    </div>
  )
}

export default App