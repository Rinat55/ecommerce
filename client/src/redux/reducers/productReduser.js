import t from '../actionTypes/productAcyionTypes'

const initialState = {
    productList: [],
    cartList: {},
    currency: [1,'$'],
    allCurrency: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case t.GET_PRODUCT:
            return ({
                ...state,
                productList: action.data
            })

        case t.CART_ADD_REMOVE:
            localStorage.setItem('cart', JSON.stringify(action.cartList))
            return ({
                ...state,
                cartList: action.cartList
            })
        case t.GET_CART_FROM_LS:
            return ({
                ...state,
                cartList: action.cart
            })
        case t.GET_ALL_CURRENCY:
            return ({
                ...state,
                allCurrency: action.data
            })
        case t.CHANGE_CURRENCY:
            return ({
                ...state,
                currency: action.currency
            })
        default:
            return state
    }
}