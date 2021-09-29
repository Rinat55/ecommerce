import React from 'react'
import {useSelector} from "react-redux";
import CartRow from "./CartRow";

const Cart = () => {
    const {cartList} = useSelector((s) => s.products)


    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto sm:overflow-hidden">
                    <table className="w-full">
                        <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Название</th>
                            <th className="px-4 py-3">Количество</th>
                            <th className="px-4 py-3">Общая стоимость</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {
                            Object.values(cartList).map(it => {
                                return <CartRow key={it.id} product={it}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )


};
export default Cart