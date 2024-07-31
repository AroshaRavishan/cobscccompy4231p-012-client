import React from 'react';

const Timeline = ({ trains, showMessage }) => {
    return (
        <div className="p-4">
            {showMessage ? (
                <div className="text-center p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded">
                    No trains match your search criteria.
                </div>
            ) : (
                <>
                    {/* Mobile view */}
                    <div className="md:hidden">
                        {trains.map((location, index) => (
                            <div key={index} className="mb-4 bg-white shadow rounded-lg p-4">
                                <h3 className="font-bold text-lg mb-2">{location.TrainId.trainName}</h3>
                                <p><span className="font-semibold">From:</span> {location.TrainId.startStation}</p>
                                <p><span className="font-semibold">To:</span> {location.TrainId.endStation}</p>
                                <p><span className="font-semibold">Express:</span> {location.TrainId.isExpress ? 'Yes' : 'No'}</p>
                                <p><span className="font-semibold">Last Arrived:</span> {location.LastArrivedStation} at {new Date(location.DateTime).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                    {/* Tablet and desktop view */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 text-left">Train Name</th>
                                    <th className="p-3 text-left">Start Location</th>
                                    <th className="p-3 text-left">End Location</th>
                                    <th className="p-3 text-left">Express</th>
                                    <th className="p-3 text-left">Last Arrived Station (Time)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trains.map((location, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{location.TrainId.trainName}</td>
                                        <td className="p-3">{location.TrainId.startStation}</td>
                                        <td className="p-3">{location.TrainId.endStation}</td>
                                        <td className="p-3">{location.TrainId.isExpress ? 'Yes' : 'No'}</td>
                                        <td className="p-3">{`${location.LastArrivedStation} (${new Date(location.DateTime).toLocaleString()})`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default Timeline;