import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import Product from '../shop/product'
import { ShopContext } from '../../context/shop-context'

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className='cart'>
      <div><h1>Your Cart Items</h1>
      </div>
      <div className='cart-items'>
        {PRODUCTS.map((Product) =>{
          if (cartItems[Product.id] !== 0){
            return <cartItem data={Product} />
          }
        })}
      </div>
      </div>
  )
}

export default Cart