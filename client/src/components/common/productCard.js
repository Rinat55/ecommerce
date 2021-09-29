import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartAddRemove} from "../../redux/actions/productAction";
import ModalImage from "./ModalImage";


const ProductCard = ({product, quantity}) => {
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
        <div className="border-2 border-gray-300 rounded-xl">

            <img
             src={product.image} className=" cursor-pointer rounded-xl h-64 w-full object-cover"
             alt={product.title}
             title="Увеличить"
             onClick={showModal}
            />
            <div className="text-center font-semibold py-2">{product.title}</div>
            <div className="text-center font-semibold py-2">
                Цена{(product.price * currency[0]).toFixed(2)} {currency[1]}
            </div>

            <div className="flex justify-center my-2 px-18">

                <button type="button"
                        className="w-20 py-2 px-4 bg-red-600 font-bold"
                        onClick={() => dispatch(cartAddRemove(product, 'remove'))}
                >-
                </button>

                <input type="text" value={quantity} readOnly className="text-center w-full"/>

                <button type="button"
                        className="w-20 py-2 px-4 bg-green-500 font-bold"
                        onClick={() => dispatch(cartAddRemove(product, 'add'))}
                >
                    +
                </button>

            </div>
        </div>
    {modal && <ModalImage image={product.image} closeModal={closeModal}/>}
    </>
    )
}
export default ProductCard;