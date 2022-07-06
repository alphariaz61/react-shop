import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function CartButton () {
    const navigate = useNavigate()
    const { items } = useSelector(s => s.cart)
    const btnBgColor = (items.length === 0) ? "none" : "white"
    return (
        <button onClick={() => navigate("/cart")} type="button" className="btn btn-outline-success d-md-block mt-3 mt-lg-0 ">
            <i className="bi bi-cart3"></i>
            <span className="mx-2">Checkout</span>
            <span className={`badge text-success bg-${btnBgColor}`}>
                {items.length}
            </span>
        </button>
    )
}