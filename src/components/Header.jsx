import React from 'react'
import { useState } from 'react'
import {BsHandbagFill} from 'react-icons/bs'
import { product } from './products'
import { useGlobalContext } from './context'

const Header = () => {
    const {amount}=useGlobalContext()
  return (
    <header className='header-block'>
      <div className="container">
        <h2 className='header-title'>My Store</h2>
      <div className='icon'>
        <BsHandbagFill className='header-icons' />
        <div className='header-number'>{amount}</div>
      </div>
      </div>
      
      
    </header>
  )
}

export default Header