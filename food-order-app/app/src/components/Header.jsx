import Button from './Button'
import logo from '../assets/logo.jpg'
import CartContext from '../context/CartContext'
import UserProgressContext from '../context/UserProgressContext'
import { useContext } from 'react'

export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartItemsCount = cartCtx.items.reduce((count, item) => {
        return count + item.quantity;
    }, 0)
    
    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button onClick={handleShowCart}>Cart ({cartItemsCount})</Button>
            </nav>
        </header>
    )
}