import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {changeCurrency} from "../redux/actions/productAction";


const Header = () => {
    const dispatch = useDispatch()
    const {cartList, currency} = useSelector((s) => s.products)

    const totaLinCart = Object.values(cartList).reduce(
        (acc, it) => acc + it.quantity,
        0
    )

    const totalPrice =  Object.values(cartList).reduce(
        (acc, it) => acc + it.quantity * it.price * currency[0],
        0
    )


    return (
        <header className="bg-gray-700 p-4 sticky top-0 z-40 " >
            <div className="container mx-auto flex justify-between text-white font 2xl:font-medium">
                <div className="pt-2">
                    <Link to="/" className="p-2 mr-2 rounded-mb hover:bg-gray-500">Главная</Link>
                    <Link to="/cart" className="p-2 mr-2 rounded-mb hover:bg-gray-500">Корзина</Link>

                    <button
                     onClick={() => dispatch(changeCurrency('USD','$'))}
                     type="button"
                     className="p-2 mr-2 rounded-mb hover:bg-gray-500"
                    >
                     USD
                    </button>

                    <button
                    onClick={() => dispatch(changeCurrency('KGS','СОМ'))}
                    type="button"
                    className="p-2 mr-2 rounded-mb hover:bg-gray-500"
                    >
                     KGS
                    </button>
                    <button
                    onClick={() => dispatch(changeCurrency('RUB','РУБЛЬ'))}
                    type="button"
                    className="p-2  rounded-mb hover:bg-gray-500"
                    >
                    RUB
                    </button>
                </div>

                <div>
                    <div className="text-sm"> Количество в корзине - {totaLinCart} шт </div>
                    <div className="text-sm"> Общая стоимость- {totalPrice.toFixed(2)} {currency[1]} </div>
                </div>
            </div>
        </header>
    );
};

export default Header;