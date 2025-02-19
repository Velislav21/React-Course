import { useContext } from "react"

import CartContext from "../../context/CartContext.jsx";
import Button from "../Button.jsx"

export default function MealCard({ meal }) {
    const cartCtx = useContext(CartContext);

    function handleAddMealInCart() {
        cartCtx.addItem(meal);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealInCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}