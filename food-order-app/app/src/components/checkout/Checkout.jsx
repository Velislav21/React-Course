import { useContext } from "react";
import CartContext from "../../context/CartContext";
import UserProgressContext from "../../context/UserProgressContext";
import Modal from "../modal/Modal";
import Input from "../elements/Input";
import Button from "../elements/Button";

export default function Checkout() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    function handleCloseCheckoutModal() {
        userProgressCtx.hideCheckout()
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target) // from the name attributes you extract the values entered by the user from input fields
        const data = Object.fromEntries(formData) // {email : test@abv.bg, ...}

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: data
                }
            }),
        })
    }

    return (
        <Modal
            open={userProgressCtx.progress === 'checkout'}
            onClose={handleCloseCheckoutModal}
        >
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total amount: {cartTotal}$</p>

                <Input label="Full Name" type="text" id="name" />
                <Input label="Email Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />

                <div className="control-row">

                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />

                </div>
                <p className="modal-actions">
                    <Button type="button" onClick={handleCloseCheckoutModal}>Close</Button>
                    <Button>Submit</Button>
                </p>
            </form>
        </Modal>
    )
}
