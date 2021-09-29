import React from 'react';

const ModalImage = ({image, closeModal}) => {
    return (
        <div onClick={closeModal} className="fixed top-0 left-0 bg-black bg-opacity-75 z-50">
            <div className="flex justify-center items-center h-screen w-screen">
                <img className="cursor-pointer" title="закрыть" src={image} alt="photo"/>
            </div>

        </div>
    );
};

export default ModalImage;