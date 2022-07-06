import Price from "../extra/Price"
import { useSelector } from "react-redux"

export default function CartNumbers () {
    const { cartNumbers } = useSelector(s => s.cart)
    const items = [
        { title : "Subtotal", price : cartNumbers.subtotal },
        { title : "Shipping", price : cartNumbers.shipping },
        { title : "Tax", price : cartNumbers.tax },
        { title : "Total (USD)", price : cartNumbers.total}
    ]
    return (
        <div id="cart-numbers">
            {items.map(({title, price}, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between">
                    <span>{title}</span>
                    <span className="text-muted">
                        <Price value={price} decimals={2}/>
                    </span>
                </li>
            ))}
        </div>
    )
}