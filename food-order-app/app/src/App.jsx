import Header from "./components/Header.jsx";
import Meals from "./components/meals/Meals.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/checkout/Checkout.jsx"
import { CartContextProvider } from "./context/CartContext.jsx";
import { UserProgressContextProvider } from "./context/UserProgressContext.jsx";
function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Meals />
                <Cart />
                <Checkout />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
