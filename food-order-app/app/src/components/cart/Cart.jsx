import { useContext } from "react";
import Modal from "../modal/Modal";
import Button from "../elements/Button";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";
import UserProgressContext from "../../context/UserProgressContext";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((total, item) => total + (item.quantity * item.price), 0)

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    function showCheckoutModal() {
        userProgressCtx.showCheckout();
    }
    function increaseItemQuantity(id, name, price) {
        cartCtx.addItem({ id, name, price });
    }

    function decreaseItemQuantity(id) {
        cartCtx.removeItem(id);
    }
    return (
        <Modal
            className="cart"
            open={userProgressCtx.progress === 'cart'}
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null} 
            // this will prevent the cart modal from closing when it is open and i want to go to the checkout modal
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item =>
                    <CartItem
                        key={item.id}
                        {...item}
                        onIncrease={increaseItemQuantity}
                        onDecrease={decreaseItemQuantity}
                    />)}
            </ul>
            <p className="cart-total">{cartTotal}$</p>
            <p className="modal-actions">

                <Button onClick={handleCloseCart}>Close</Button>

                {cartCtx.items.length > 0 && (
                    <Button onClick={showCheckoutModal}>Go To Checkout</Button>
                )}
            </p>
        </Modal>
    )
}