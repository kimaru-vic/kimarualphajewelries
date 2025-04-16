import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { cartReducer } from './Reducer';



const Cart=createContext();

const Context =({children}) => {
  const [product,setProduct]=useState([])
  const[state,dispatch]=useReducer(cartReducer,{
    products: [],
    cart:[]
});
    useEffect(() => {
      if (product.length > 0) {
        dispatch({ type: "SET_PRODUCTS", payload: product });
      }
    }, [product]);
    const getprod=async()=>{
      const response=await axios.get("https://farasivictor.pythonanywhere.com/api/get_products_details")
      setProduct(response.data)
    }
    useEffect(()=>{getprod()},[])  
      
//  console.log(state)
    
  return ( 
    <Cart.Provider value={{state,dispatch}} >
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
  return useContext(Cart)
}
