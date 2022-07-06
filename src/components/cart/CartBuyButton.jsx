import { useNavigate } from "react-router-dom"

export default function CartBuyButton () {    
    const nav = useNavigate()

    const buy = () => {
        if (window.confirm("Place Order For 3 Products?")) {
            alert("Order Placed Successfully")
            nav("/")
            window.location.reload()
        }
    }

    return (
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
            Buy Now
        </button>
    )
}