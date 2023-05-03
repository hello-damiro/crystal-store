import React, { useState, useContext } from 'react';
import crystalData from '../../data/CrystalsData';

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export function useCartUpdate(id) {
    return useContext(CartUpdateContext);
}

export function CartProvider({ children }) {
    const data = crystalData;
    const [cartItems, setCartItems] = useState([]);
    const updateCart = (id) => {
        console.log('passing context id', id);
        const crystal = data.find((crystal) => crystal.id === id);
        const item = cartItems.filter((item) => item.crystal.id === id);
        if (item.length === 0) {
            setCartItems([...cartItems, { crystal, count: 1 }]);
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.crystal.id === id ? { ...item, count: item.count + 1 } : item
                )
            );
        }
    };
    return (
        <CartContext.Provider value={cartItems}>
            <CartUpdateContext.Provider value={(id) => updateCart(id)}>
                {children}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    );
}
