import axios from "axios"
import t from '../actionTypes/productAcyionTypes'

export const getProducts = () => {
    return (dispatch) => {
        axios.get('api/v1/get-products').then(({data}) => {
            dispatch({type: t.GET_PRODUCT, data})
        })
    }
}
export const cartAddRemove = (data, action) => {
    return (dispatch, getState) => {
        const store = getState()
        const {cartList} = store.products

        if (action === 'add') {
            if (data.id in cartList) {
               cartList[data.id] = {...data, quantity: cartList[data.id].quantity += 1}
            } else {
                cartList[data.id] = {...data, quantity: 1}
            }
        } else if (action === 'remove') {
            if (data.id in cartList) {
                if (cartList[data.id].quantity > 1) {
                    cartList[data.id] = {...data, quantity: cartList[data.id].quantity -= 1}
                } else {
                    delete cartList[data.id]
                }
            }
        }

        dispatch({ type: t.CART_ADD_REMOVE, cartList})

    }
}

export const getCartFromLS = () => {
    let cart
    try {
        cart = JSON.parse(localStorage.getItem('cart')) || {}
    } catch (e) {
        cart = {}
    }
    return ({type: t.GET_CART_FROM_LS, cart})
}
 export const getAllCurrecy = () => {
    return (dispatch) =>{
        axios.get('/api/v1/get-rates')
            .then(({data}) => dispatch({type: t.GET_ALL_CURRENCY, data}))
    }
 }

 export const changeCurrency = (currency, symbol) => {
 return (dispatch, getState) => {
     const store = getState()
     const {allCurrency} = store.products
     return dispatch({type:t.CHANGE_CURRENCY, currency: [allCurrency[currency], symbol]})
 }
 }
















