import Products from "../components/products/Products";
import { useSelector } from "react-redux";

export default function Home () {
    const { productsBySearchAndCategory } = useSelector(state => state.products)
    return (
        <div className="my-3">
            <Products products={productsBySearchAndCategory}/>
        </div>
    )
}