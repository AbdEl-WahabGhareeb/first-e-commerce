import { getUserCart } from '@/app/serveractions/cart.action'
import CartDisplay from '@/components/Cart-Component/CartDisplay';
import React from 'react'

export default async function Cart() {

  const cart = await getUserCart()
  console.log(cart, "cart");
  
  

  
  return (
  <div className="container mx-auto text-2xl text-center mt-20">
            <p className="font-bold mt-24 mb-12 text-2xl text-center">Cart Page</p>

    <CartDisplay />

  </div>
  )
}
