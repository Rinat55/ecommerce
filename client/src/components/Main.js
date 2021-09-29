import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Header from "./header";
import {getProducts} from "../redux/actions/productAction";
import ProductCard from "./common/productCard";


const Main = () => {
    const dispatch = useDispatch()
    const {productList, cartList} = useSelector((s) => s.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            <Header/>
            <div className="container mx-auto my-4">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {productList.map(it => {
                        const quantity = cartList[it.id]?.quantity || 0
                        return <ProductCard key={it.id} quantity={quantity} product={it}/>

                        }
                    )}
                </div>
            </div>
        </>
    )
}

export default Main
