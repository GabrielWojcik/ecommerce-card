import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  cart: { name: string }[];
  handleAddItemToCart: (name: string) => void;
  handleRemoveItemFromCart: (clickedItemIndex: number) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<{ name: string }[]>([]);

  function handleAddItemToCart(name: string) {
    const itemObject = { name };
    setCart([...cart, itemObject]);
  }

  function handleRemoveItemFromCart(clickedItemIndex: number) {
    const filteredCart = cart.filter(
      (cardItem, index) => index !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  const contextValue: CartContextType = {
    cart,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};