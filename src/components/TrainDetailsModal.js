import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose, train }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            id="my-modal"
        >
            <div
                ref={modalRef}
                className={`relative p-5 border w-96 shadow-lg rounded-md bg-white transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                <div className="mt-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">{train?.TrainId.trainName}</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            <strong>From:</strong> {train?.TrainId.startStation}
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>To:</strong> {train?.TrainId.endStation}
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>Express:</strong> {train?.TrainId.isExpress ? 'Yes' : 'No'}
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>Last Arrived:</strong> {train?.LastArrivedStation} at {train && new Date(train.DateTime).toLocaleString()}
                        </p>
                        {/* Add more details as needed */}
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;