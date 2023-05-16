import { createContext, useState } from 'react'

const CartContext = React.createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart([])
  }
}
