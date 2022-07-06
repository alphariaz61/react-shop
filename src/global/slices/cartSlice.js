import { createSlice } from "@reduxjs/toolkit"
import calculateCartNumbers from "../../scripts/calculateCartNumbers"

export const { actions, reducer } = createSlice({
    name : "cart",
    initialState : {
        items : [],
        cartNumbers : {
            subTotal : 0, shipping : 0, tax : 0, total : 0
        }
    },
    reducers : {
        addToCart (state, { payload:item }, a) {
            state.items.push({...item, quantity : 1})
        },
        removeFromCart (state, { payload:item }) {
            state.items.splice(state.items.findIndex((i) => i.id === item.id), 1)
        },
        incrementItemQuantity (state, {payload:{item, amount}}) {
            state.items = state.items.map((i) => (
                (i.id === item.id) ? {...i, quantity : i.quantity + amount} : i
            )).filter((i) => i.quantity > 0)
        },
        calculateCartNumbers (state) {
            state.cartNumbers = calculateCartNumbers(state.items)
        }
    }
})