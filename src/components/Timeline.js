import React, { useEffect, useState } from 'react';
import locationService from '../services/locationService';

const Timeline = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        // Fetch data from backend using locationService
        const fetchData = async () => {
            try {
                const data = await locationService.getAllLocations();
                const trainData = data.map(location => ({
                    trainNumber: location.TrainId.trainNumber,
                    trainName: location.TrainId.trainName,
                    startStation: location.TrainId.startStation,
                    endStation: location.TrainId.endStation,
                    isExpress: location.TrainId.isExpress,
                    lastStation: location.LastArrivedStation,
                    lastArrivalTime: new Date(location.DateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }));
                setTrains(trainData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            {/* Mobile view */}
            <div className="md:hidden">
                {trains.map((train, index) => (
                    <div key={index} className="mb-4 bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold text-lg mb-2">{train.trainName}</h3>
                        <p><span className="font-semibold">From:</span> {train.startStation}</p>
                        <p><span className="font-semibold">To:</span> {train.endStation}</p>
                        <p><span className="font-semibold">Express:</span> {train.isExpress ? 'Yes' : 'No'}</p>
                        <p><span className="font-semibold">Last Arrived:</span> {train.lastStation} at {train.lastArrivalTime}</p>
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
                        {trains.map((train, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="p-3">{train.trainName}</td>
                                <td className="p-3">{train.startStation}</td>
                                <td className="p-3">{train.endStation}</td>
                                <td className="p-3">{train.isExpress ? 'Yes' : 'No'}</td>
                                <td className="p-3">{`${train.lastStation} (${train.lastArrivalTime})`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Timeline;
