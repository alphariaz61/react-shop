import { useSelector } from "react-redux"
import CartItem from "../components/cart/CartItem"
import CartNumbers from "../components/cart/CartNumbers"
import CartBuyButton from "../components/cart/CartBuyButton"
import Condition from "../components/util/Condition"
import NoContent from "../components/extra/NoContent"

export default function Cart () {
    const { items } = useSelector((s) => s.cart)
    return (
        <div className="row py-3">
            <Condition test={items.length > 0} success={
                <div className="col-12 col-md-10 col-xl-8 mx-auto">
                    <div id="cart" className="border p-3 bg-white text-dark my-3 my-md-0 rounded">
                        <h4 className="d-flex justify-content-between align-items-center mb-3 px-1">Cart</h4>
                        <ul className="list-group mb-3 cart-list">
                            {items.map((item) => <CartItem item={item} key={item.id}/>)}
                        </ul>
                        <CartNumbers/>
                        <CartBuyButton/>
                    </div>                
                </div>
            } fail={<NoContent text="Nothing In Your Cart"/>}/>
        </div>
    )
}