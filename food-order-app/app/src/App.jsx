import Header from "./components/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import { UserProgressContextProvider } from "./context/UserProgressContext";
function App() {

    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Meals />
                <Cart />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
