import React, { useState } from 'react'
import { getData } from './constants/db'
import Card from './componets/card/card'
import './App.css'
import Shop from './componets/shop/shop'

const car = getData()

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const onAddItem = item => {
    const existItem = cartItems.find(c => c.id == item.id)
    if(existItem) {
      const newData = cartItems.map(c => 
        c.id == item.id
        ? {...existItem, quantity: existItem.quantity + 1} : c
        )
        setCartItems(newData)
    }else {
      const newData = [...cartItems, {...item, quantity: 1}]
      setCartItems(newData)
    }
  }

  const onRemoveItem = item => {
    const existItem = cartItems.find(c => c.id == item.id)

    if(existItem.quantity == 1) {
      const newData = cartItems.filter(c => c.id !== existItem.id)
      setCartItems(newData)
    }else {
      const newData = cartItems.map(c => 
        c.id == item.id
        ? {...existItem, quantity: existItem.quantity - 1} : c
        )
        setCartItems(newData)
    }
  }

  return (
    <div className='container'>
      <h1 className='heading'>GM Auto</h1>
      <Shop />
      <div className='app-card'>
      {car.map((car => (
          <Card car={car} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
      )))}
      </div>
    </div>
  )
}

export default App