import { useSelector, useDispatch } from "react-redux"
import { actions as cartActions } from "../../global/slices/cartSlice"
import Condition from "../util/Condition"

export default function ProductButton ({product}) {
    const dispatch = useDispatch()
    const { items } = useSelector(s => s.cart)    
    const isInCart = Boolean(items.find((i) => i.id === product.id))
    
    return (
        <Condition test={isInCart} success={
            <button onClick={() => dispatch(cartActions.removeFromCart(product))} className="btn btn-outline-danger d-block w-100">
                <span>Remove From Cart</span>
            </button>
        } fail={
            <button onClick={() => dispatch(cartActions.addToCart(product))} className="btn btn-outline-success d-block w-100">
                <span>Add To Cart</span>
            </button>
        }/>
    )
}