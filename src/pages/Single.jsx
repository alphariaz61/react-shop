import ProductButton from "../components/products/ProductButton"
import Line from "../components/extra/Line"
import Products from "../components/products/Products"
import Price from "../components/extra/Price"
import { useEffect} from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actions as productsActions } from "../global/slices/productsSlice"

export default function Single () {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { single, singleSimilarProducts } = useSelector(state => state.products)

    useEffect(() => { dispatch(productsActions.setSingle(id)) }, [id, dispatch])
    return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6">
                    <img src={require(`../images/${single.id}.jpg`)} alt={single.name} className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"/>
                </div>
                <div className="col-md-6 text-center text-md-start ">
                    <h2 className="fs-2 fw-bold">{single.name}</h2>
                    <div className="fs-5 mb-2">
                        <Price value={single.price}/>
                    </div>
                    <p className="lead">{single.description?.substring(0, 100)}</p>
                    <ProductButton product={single} />
                </div>
            </div>
            <Line/>
            <h2 className="text-white my-4 text-center">Similar Products Like This</h2>
            <Products products={singleSimilarProducts}/>
        </div>
    )
}