import React, { useState, useEffect } from 'react'; 

import CartItem from '../CartItem'
import Total from '../Total'

import wave from '../../assets/images/wave.svg';

import { salesTax } from '../../db';

import './Cart.scss'

const Cart = ({ items, setItems }) => {
  const [bill, setBill] = useState(0)

  const cartUpdate = (title, quantity) => {
    const newInCart = items.map((i) => i.title === title ? { ...i, inCart: i.inCart + quantity } : { ...i })
    setItems(newInCart)
  }

  useEffect(() => {
    const totalItemsInCart = items.filter((i) => i.inCart > 0)
    if (totalItemsInCart.length > 0) {
      const totalCartPrice = totalItemsInCart.map((i) => i.inCart * i.price).reduce((acc, i) => acc + i)
      setBill(totalCartPrice)
    } else {
      setBill(0)
    }
  }, [items])

  return (
    <div className="Cart">
      <header className="Cart__header">
        <h2 className="Cart__header__title">Your Cart</h2>
        <img className="Cart__header__wave" src={wave} alt="wave decoration" />
      </header>
      <main className="Cart__items">
        {items && items.map((item) => item.inCart >= 0 ?
          <CartItem key={item.title} item={item} cartUpdate={cartUpdate} />
          : 
          null
        )}
      </main>
      <footer className="Cart__bill">
        {bill >= 0 && <Total bill={bill} />}
      </footer>
    </div>
  )
}

export default Cart
