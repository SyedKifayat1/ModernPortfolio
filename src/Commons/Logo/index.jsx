import React from 'react'
import "./Logo.css"
import { FaL, FaLaptopCode } from 'react-icons/fa6';
const Logo = () => {
  return (
    <div className='logo'>
        <FaLaptopCode className='icon'/>
        <h1>Portfolio</h1>
    </div>
  )
}

export default Logo