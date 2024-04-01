import React from 'react'
import { PRODUCTS } from "../../products"
import Product from './product'
import './shop.css'

const shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Jet Mobile</h1>
        </div>
        <div className='products'> {PRODUCTS.map((products) => <Product  data={products}/>)}</div>
    </div>
  )
}

export default shop