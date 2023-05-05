import React, { useReducer, useContext } from 'react';
import { ACTIONS, cartReducer } from './CartReducer';

const CartContext = React.createContext();
const initialState = [];

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, dispatch] = useReducer(cartReducer, initialState);
    const addToCart = (id) => {
        dispatch({ type: ACTIONS.ADD, payload: id });
    };
    const minusFromCart = (id) => {
        dispatch({ type: ACTIONS.MINUS, payload: id });
    };
    const removeToCart = (id) => {
        dispatch({ type: ACTIONS.REMOVE, payload: id });
    };
    const clearCart = (id) => {
        dispatch({ type: ACTIONS.CLEAR, payload: id });
    };
    const renderItem = (id) => {
        dispatch({ type: ACTIONS.RENDER, payload: id });
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, minusFromCart, removeToCart, clearCart, renderItem }}>
            {children}
        </CartContext.Provider>
    );
}
