import { useLocation, useNavigate } from "react-router-dom"
import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"
import CartBtn from "./CartBtn"
import Condition from "../util/Condition"

export default function Navbar({title}) {
    const nav = useNavigate()
    const { pathname } = useLocation()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
            <div className="container-fluid px-md-5">
                <span onClick={() => nav("/")} id="name" className="navbar-brand fw-bold pointer">
                    {title}
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <Condition test={(pathname === "/")} success={<><CategorySelector/><SearchBar/></>}/>
                    <CartBtn/>
                </div>
            </div>
        </nav>
    )
}