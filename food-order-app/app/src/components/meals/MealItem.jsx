export default function MealCard({ name, price, description, image }) {

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </p>
            </article>
        </li>
    )
}