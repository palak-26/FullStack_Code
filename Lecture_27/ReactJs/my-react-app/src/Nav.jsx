import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
const Nav = () => {
  return (
    <div>
     
        <nav>
           <Link to={'/'} ><span>Home</span></Link> 
            <Link to={'/About'}><span>About</span></Link>
           <Link to={'/Contact'} > <span>Contact</span></Link>
           <Link to={'/SignUp'} ><span>SignUp</span></Link> 
        </nav>
    </div>
  )
}

export default Nav