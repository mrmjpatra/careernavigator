import React from 'react';

const Modal = ({setShowModal}:{setShowModal:(open:boolean)=>void}) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center  z-20`}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 z-30">
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p>This is the modal content.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={()=>setShowModal(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
