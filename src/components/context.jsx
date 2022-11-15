import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { product } from './products';
const userContext= createContext();

const initialState={
    items:product,
    amount:product.length,
    total:0
}
const reducer=(state,action)=>{
    if(action.type==='clear'){
        state.items=[];
        return {...state,items:[]}
    }
    if(action.type==='remove'){
       let newItems= state.items.filter(item=>item.id!=action.payload)
        return {...state,items:newItems}
    }
    if(action.type==='increase'){
        let newItems=state.items.map(item=>{
            if(item.id===action.payload){
                return {...item,amount:item.amount +1}
            }
            return item
            
        })
        return {...state,items:newItems}
    }
    if(action.type==='decrease'){
        let newItems=state.items.map(item=>{
            if(item.id===action.payload){
                return {...item,amount:item.amount -1}
            }
            return item
        }).filter(item=>item.amount>0)
        return {...state,items:newItems}
    }
    if(action.type==='get-amount'){
        let newAmount=state.items.map((total)=>{
            let am=0;
            am+=total.amount;
            return am
        }).reduce((a,b)=>a+b,0)
        return {...state,amount:newAmount}
    }
    if(action.type==='get-total'){
        let newTotal=state.items.map((total)=>{
            let am=0;
            am+=total.amount*total.price;
            return am
        }).reduce((a,b)=>a+b,0)
        return {...state,total:newTotal}
    }
    return state;
}
const AppProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const clearAll=()=>{
        dispatch({type:'clear'})
    }
    const remove=(id)=>{
        dispatch({type:'remove',payload:id})
    }
    const increase=(id)=>{
        dispatch({type:'increase',payload:id})
    }
    const decrease=(id)=>{
        dispatch({type:'decrease',payload:id})
    }
    useEffect(()=>{
        dispatch({type:'get-amount'});
    },[state.items])
    useEffect(()=>{
        dispatch({type:'get-total'})
    },[state.amount])
    
  return (
    <userContext.Provider value={{...state,clearAll,remove,increase,decrease}}>
      {children}
    </userContext.Provider>
  )
}

const useGlobalContext=()=>{
    return useContext(userContext)
}
export {AppProvider,useGlobalContext,userContext}
