import { useDispatch } from "react-redux"
import { actions as cartActions } from "../../global/slices/cartSlice"
import Price from "../extra/Price"

export default function CartItem ({item}) {
    const dispatch = useDispatch()

    const incrementQuantity = (item, amount) => {
        dispatch(cartActions.incrementItemQuantity({item, amount}))
    }

    const { name, price, quantity, description } = item

    return (
        <li className="list-group-item">
            <div className="my-0 d-flex justify-content-between align-items-center "> 
                <span className="fw-bolder fs-6 me-auto">{name} (<Price value={price}/>)</span>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button 
                        onClick={() => incrementQuantity(item, -1)} 
                        type="button" className="btn border"
                    >-</button>
                    <button type="button" className="btn btn-light" disabled>{quantity}</button>
                    <button 
                        onClick={() => incrementQuantity(item, 1)} 
                        type="button" className="btn border"
                    >+</button>
                </div>
            </div>
            <p className="text-muted mb-0 col-3 description w-100">{description}</p>
        </li>
    )
}