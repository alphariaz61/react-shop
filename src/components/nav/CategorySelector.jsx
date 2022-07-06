import { useSelector, useDispatch } from "react-redux"
import { actions as productsActions } from "../../global/slices/productsSlice"

export default function CategorySelector() {
    const { categories, selectedCategory } = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <div className="dropdown mb-3 mb-lg-0">
            <button 
                className="btn btn-outline-success text-white dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                    {selectedCategory}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {categories.map((c, i) => (
                    <li onMouseEnter={() => dispatch(productsActions.setSelectedCategory(c))} key={i}>
                        <a className="dropdown-item pointer" href={`#${c}`}>{c}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}