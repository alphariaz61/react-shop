import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Cart from "./pages/Cart"
import { useSelector, useDispatch } from "react-redux"
import { actions as cartActions } from "./global/slices/cartSlice"

export default function App () {
    const dispatch = useDispatch()
    const location = useLocation()
    const { items } = useSelector(s => s.cart)
    useEffect(() => { dispatch(cartActions.calculateCartNumbers()) }, [items, dispatch])
    useEffect(() => { window.scrollTo(0,0) }, [location])
    return (
        <div className="wrapper bg-dark text-white">
            <Navbar title="React Shop"/>
            <div className="container mt-5 py-5 px-3 px-md-5">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/single/:id" element={<Single/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    )
}