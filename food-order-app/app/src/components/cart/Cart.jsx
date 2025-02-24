import { useContext } from "react";
import Modal from "../modal/Modal";
import Button from "../Button";
import CartContext from "../../context/CartContext";
import UserProgressContext from "../../context/UserProgressContext";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((total, item) => total + (item.quantity * item.price), 0)

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}
            </ul>
            <p className="cart-total">{cartTotal}$</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Close</Button>
                <Button>Go To Checkout</Button>
            </p>
        </Modal>
    )
}