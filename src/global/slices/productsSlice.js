import { createSlice } from "@reduxjs/toolkit"
import { uniq, sortBy } from "lodash"
import { stringSimilarity as getSimScore } from "string-similarity-js"
import data from "../../data"
import { loremIpsum } from "lorem-ipsum";

const DEFAULT_CATEGORY = "All"

data.forEach((d) => d.description = loremIpsum())// Initialize a description for each product

export const { actions, reducer } = createSlice({
    name : "products",
    initialState : {
        searchTerm : "", 
        products : data, productsFromSearch : data,
        categories : [DEFAULT_CATEGORY, ...(uniq(data.map(p => p.category))).sort()], 
        selectedCategory : [DEFAULT_CATEGORY],
        single : data[0], singleSimilarProducts : [],
    },
    reducers : {
        setSearchTerm (state, { payload:searchTerm }) {
            // Reset Nav bar    
            state.productsFromSearch = state.products
            state.selectedCategory = DEFAULT_CATEGORY
            // Search operations
            state.searchTerm = searchTerm          
            if (searchTerm.length > 0) {
                state.productsFromSearch.forEach(p => {
                    p.simScore = getSimScore(`${p.name} ${p.category}`, searchTerm)
                })
                state.productsFromSearch = sortBy(state.productsFromSearch, 'simScore').reverse()
            } else {
                state.productsFromSearch = data
            }
        },
        setSelectedCategory (state, { payload:category }) {
            state.searchTerm = ""// reset navbar
            state.selectedCategory = category
            state.productsFromSearch = state.products.filter((p) => (
                (category === DEFAULT_CATEGORY) ? true : (p.category === category)
            ))
        },
        setSingle (state, {payload:id}) {
            const product = state.products.find((p) => p.id === +id)
            state.single = product
            state.singleSimilarProducts = state.products.filter((p) => (
                (p.category === product.category) && (p.id !== product.id)
            ))
        }
    }
})