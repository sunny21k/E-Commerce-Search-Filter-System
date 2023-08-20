import React from 'react'
import './Sidebar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

function Sidebar({handleChange}) {
    
  return <> 
    <section className="sidebar">
        <div className="logo-container">
            <h1><AiOutlineShoppingCart /></h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
  </>
}

export default Sidebar