import { useDispatch, useSelector } from "react-redux"
import { actions as productsActions } from "../../global/slices/productsSlice"

export default function NavSearchBar () {
    const { searchTerm } = useSelector(s => s.products)
    const dispatch = useDispatch()
    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-md-0 ms-lg-3">
            <input 
                className="form-control ms-md-auto me-2" 
                type="search" 
                placeholder="Search Products"
                value={searchTerm}
                onChange={(e) => dispatch(productsActions.setSearchTerm(e.target.value))}
            />
        </form>
    )
}