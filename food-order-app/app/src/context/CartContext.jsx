import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { }
})


function cartReducer(state, action) {
    if (action.type === "add-item") {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)


        const updatedItems = [...state.items];

        if (existingItemIndex > -1) {

            const existingItem = state.items[existingItemIndex];

            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };

            updatedItems[existingItemIndex] = updatedItem;

        } else {
            updatedItems.push({ ...action.item, quantity: 1 })
        }

        return { ...state, items: updatedItems };
    }
    if (action.type === "remove-item") {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id)


        const cartItem = state.items[existingItemIndex];

        const updatedItems = [...state.items];
        if (cartItem.quantity === 1) {

            updatedItems.splice(existingItemIndex, 1);

        } else {

            const updatedItem = { ...cartItem, quantity: cartItem.quantity - 1 };
            updatedItems[existingItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }

    if (action.type === "clear-cart") {
        return { ...state, items: [] }
    }

    return state;
}

export function CartContextProvider({ children }) {

    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatchCartAction({ type: 'add-item', item })
    }
    function removeItem(id) {
        dispatchCartAction({ type: 'remove-item', id })
    }
    function clearCart() {
        dispatchCartAction({ type: 'clear-cart' })
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    }

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext