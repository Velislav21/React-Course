import Button from './Button'
import logo from '../assets/logo.jpg'
import CartContext from '../context/CartContext'
import { useContext } from 'react'

export default function Header() {

    const cartCtx = useContext(CartContext);

    const cartItemsCount = cartCtx.items.reduce((count, item) => {
        return count + item.quantity;
    }, 0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button>Cart ({cartItemsCount})</Button>
            </nav>
        </header>
    )
}