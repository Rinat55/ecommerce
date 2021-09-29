import React, {useState} from 'react';
import {cartAddRemove} from "../../redux/actions/productAction";
import {useDispatch, useSelector} from "react-redux";
import ModalImage from "./ModalImage";

const CartRow = ({product}) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const {currency} = useSelector((s) => s.products)


    const showModal = () => {
        setModal(true)
        document.body.style.overflow = 'hidden'
    }
    const  closeModal = () => {
        setModal(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <>
            <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="cursor-pointer object-cover w-full h-full rounded-full"
                                 src={product.image}
                                 alt={product.title}
                                 title="Увеличить"
                                 loading="lazy"
                                 onClick={showModal}
                            />

                        </div>
                        <div>
                            <p className="font-semibold text-black">{product.title}</p>
                            <p className="text-xs text-gray-600">
                                Цена{(product.price * currency[0]).toFixed(2)} {currency[1]}</p>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border w-80">
                    <div className="flex justify-center my-2 px-18 ">
                        <button
                            type="button"
                            className="w-20 py-2 px-4 bg-red-600 font-bold"
                            onClick={() => dispatch(cartAddRemove(product, 'remove'))}
                        >
                            -
                        </button>

                        <input type="text" value={product.quantity} readOnly className="text-center w-full"/>

                        <button type="button"
                                className="w-20 py-2 px-4 bg-green-500 font-bold"
                                onClick={() => dispatch(cartAddRemove(product, 'add'))}
                        >
                            +
                        </button>

                    </div>
                </td>
                <td className="px-4 py-3  border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {(product.price * product.quantity * currency[0]).toFixed(2)} {currency[1]}
                </span>
                </td>
            </tr>
            {modal && <ModalImage image={product.image} closeModal={closeModal}/>}
        </>
    );
};

export default CartRow;