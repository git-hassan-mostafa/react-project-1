import React from 'react'
import { useGlobalContext } from './context'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const Product = ({id,url,title,os,memory,price,amount}) => {
    const {remove,increase,decrease}=useGlobalContext()
  return (
       <section>
      <img className='product-image' src={url} alt="product" />
      <div className='product-info'>
        <span  className='definition'>name : </span> <span className='declaration'> {title} </span> <br />
        <span  className='definition'>os :</span> <span className='declaration'> {os} </span> <br />
        <span className='definition'>memory size :</span> <span className='declaration'> {memory} </span> <br /> 
        <span  className='definition'> price :</span> <span className='declaration' > {price} $ </span> <br /><br />
        <button onClick={()=>remove(id)}>remove</button>
      </div>
      <div className="change-amount">
        <AiOutlinePlus className='icon' onClick={()=>increase(id)} />
        <div className='amount'>{amount}</div>
        <AiOutlineMinus className='icon' onClick={()=>decrease(id)} />
      </div>
      
    </section> 
    
  )
}

export default Product
