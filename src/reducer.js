import { act } from "@testing-library/react"
import data from './data';
let reducer = (state, action) => {
    if (action.type == "show items") {
        return { ...state, loading: false, items: action.payload, total: 0 }
    }
    else if (action.type == "updating total") {
        return { ...state, total: action.payload }
    }
    else if (action.type == "add to cart") {
        let value = state.items.find((item1) => {
            return action.payload == item1.id
        })
        console.log(value)
        return { ...state, cart: [...state.cart, value] }
    }
    else if (action.type == "remove from cart") {
        return { ...state, cart: [...state.cart.filter((item) => item.id != action.payload)] }
    }
    else if (action.type == "increment") {
        let cart1 = state.cart.map((unit) => {
            if (unit.id == action.payload) {
                return { ...unit, amount: unit.amount + 1 }
            }
            return unit
        })
        return { ...state, cart: cart1 }
    }
    else if (action.type == "decrement") {
        let cart1 = state.cart.map((unit) => {
            if (unit.id == action.payload) {
                return { ...unit, amount: unit.amount - 1 }
            }
            return unit
        }).filter((item) => item.amount != 0)
        return { ...state, cart: cart1 }
    }
    else {
        return { ...state, cart: state.cart.filter((unit) => unit.id != action.payload) }
    }
    return state
}
export let initialState = { loading: true, items: data, cart: [], total: 0 }
export { reducer }