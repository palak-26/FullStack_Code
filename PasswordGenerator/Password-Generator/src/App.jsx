import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
import { GoArrowDown } from "react-icons/go";

const App = () => {
  const [length,setLength] = useState(8);
  const [numAllowed,setNumAllowed]= useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]= useState('')

  const [input,setInput] = useState(' ')
  const [qr,setQR] = useState('')

  const generateQR= ()=>{
    if(input.trim() === ''){
      alert("Enter the valid URL or text!!")
      return;
    }

    const encodedInput = encodeURIComponent(input);
    const url =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedInput}`;
    console.log(url);
    
    setQR(url);

    document.createElement('a')


    
  }
  const downloadQR=()=>{
      const link = document.createElement('a')
      link.href = qr;
      link.download = "qr.code.png"
      link.click()

    }

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback (()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz'
    if(numAllowed) str+='1234567890'
    if(charAllowed) str+='~@#$!%^&*(){}+-_/?,.;'

    for(let i=0; i<=length;i++){
       let char = Math.floor(Math.random()* str.length+1)

       pass+= str.charAt(char);

       
    }
    setPassword(pass)

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
    <div className='min-h-screen min-w-full bg-black flex justify-center p-20 '>
      <div className='max-w-md w-full md: bg-gray-700 p-2 rounded-3xl space-y-4 '>
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
        <button onClick={copyPasswordToClip} className='bg-blue-800 rounded-e-xl p-4 h-10 flex items-center font-semibold text-white cursor-pointer outline-none'>Copy</button>
        </div>
        <div className='w-full max-w- flex p-2 gap-x-1 text-white font-semibold'>
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
        <div className='space-y-4 flex flex-col items-center'>
          <h1 className='text-center text-white text-3xl font-bold'>QR Code Generator</h1>
          <input 
          type="text" 
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
          className='w-full rounded-xl h-10 p-4 outline-none'
          placeholder='Enter Url or Text '
          />

          <button
          onClick={generateQR} 
          className=' text-white font-semibold bg-blue-700 w-fit p-3  rounded-lg'>Generate QR Code </button>

         
            {qr && ( <div className='p-4  group relative'>
              <img src={qr} alt="Generated QR" className='h-52 w-52 rounded-sm group-hover:scale-95 transition-all duration-700'  />
            <button className='absolute top-6 right-6 font-semibold text-white   bg-black/50 rounded-full p-2 hidden transition-all duration-700 group-hover:block  ' onClick={downloadQR}><b> <GoArrowDown size={20} strokeWidth={2}/></b> </button>
             </div>)}
            
         
        </div>
      </div>
    </div>
  )
}

export default App