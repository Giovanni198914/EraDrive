import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceWithoutCurrency = item.price.replace(/[^\d.]/g, '');
      const numericPrice = parseFloat(priceWithoutCurrency);
      return total + numericPrice;
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart, cartItems, addToCart, getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
