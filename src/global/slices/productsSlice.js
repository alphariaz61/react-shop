import { createSlice } from "@reduxjs/toolkit"
import lodash from "lodash"
import { stringSimilarity } from "string-similarity-js"
import data from "../../data"
import { loremIpsum } from "lorem-ipsum";

const DEFAULT_CATEGORY = "All"

// Add a description for each product
data.forEach((d) => d.description = loremIpsum())

export const { actions, reducer } = createSlice({
    name : "products",
    initialState : {
        searchTerm : "", 
        products : data, productsBySearchAndCategory : data,
        categories : [DEFAULT_CATEGORY, ...lodash.uniq(data.map(p => p.category))], 
        selectedCategory : [DEFAULT_CATEGORY],
        single : data[0], singleSimilarProducts : [],
    },
    reducers : {
        setSearchTerm (state, { payload:searchTerm }) {
            // Reset Nav bar    
            state.productsBySearchAndCategory = state.products
            state.selectedCategory = DEFAULT_CATEGORY
            // Search operations
            state.searchTerm = searchTerm
            if (searchTerm.length === 0) {
                state.productsBySearchAndCategory = data
            } else {
                state.productsBySearchAndCategory.forEach((p) => {
                    p.simScore = stringSimilarity(`${p.name} ${p.category}`, searchTerm)
                })
                state.productsBySearchAndCategory = state.productsBySearchAndCategory.sort((a, b) => b.simScore - a.simScore)                
            }            
        },
        setSelectedCategory (state, { payload:category }) {
            // reset navbar
            state.searchTerm = ""
            // select category operation
            state.selectedCategory = category
            state.productsBySearchAndCategory = state.products.filter((p) => (
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