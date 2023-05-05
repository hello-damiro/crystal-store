import { collection } from './CartContext';

export const ACTIONS = {
    ADD: 'add',
    MINUS: 'minus',
    REMOVE: 'remove',
    CLEAR: 'clear',
    FETCH: 'fetch',
};

export function cartReducer(cartItems, action) {
    switch (action.type) {
        case ACTIONS.REMOVE: {
            return cartItems.filter((item) => item.crystal.id !== action.payload);
        }
        case ACTIONS.ADD: {
            const foundItem = collection.find((crystal) => crystal.id === action.payload);
            const item = cartItems.filter((item) => item.crystal.id === action.payload);
            if (item.length === 0) {
                cartItems = [...cartItems, { foundItem, count: 1 }];
            } else {
                cartItems = cartItems.map((item) =>
                    item.crystal.id === action.payload ? { ...item, count: item.count + 1 } : item
                );
            }
            return cartItems;
        }
        case ACTIONS.MINUS: {
            return cartItems.map((item) =>
                item.crystal.id === action.payload
                    ? { ...item, count: item.count === 1 ? 1 : item.count - 1 }
                    : item
            );
        }
        case ACTIONS.CLEAR: {
            return (cartItems = []);
        }
        default:
            return cartItems;
    }
}
