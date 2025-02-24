export default function CartItem(
    {
        name,
        quantity,
        price,
        id,
        onIncrease,
        onDecrease
    }) {
    return (
        <li className="cart-item">
            <p>
                {name} - {price} x {quantity}$
            </p>
            <p className="cart-item-actions">
                <button onClick={() => onDecrease(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => onIncrease(id, name, price)}>+</button>
            </p>
        </li>
    )
}
