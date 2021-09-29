import {combineReducers} from 'redux'
import products from './productReduser'

const createRootReducer = () => combineReducers({
    products
})


export default createRootReducer
