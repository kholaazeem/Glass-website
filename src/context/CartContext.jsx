import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Cart kholne/band karne ke liye
  const toggleCart = () => setIsOpen(!isOpen);

  // Item add karne ka logic
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check kro agar item pehle se cart mein hai
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Agar hai, to quantity barha do
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Agar nahi hai, to naya add kro
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setIsOpen(true); // Add krte hi cart khul jaye
  };

  // Item remove karne ka logic
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Total Price Calculate karna
  const cartTotal = cartItems.reduce((total, item) => {
    // "$4.50" me se "$" hata kar number banao
    const price = parseFloat(item.price.replace('$', '')); 
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isOpen, toggleCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);