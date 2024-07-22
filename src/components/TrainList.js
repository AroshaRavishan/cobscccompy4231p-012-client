// src/TrainList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainList = () => {
    const [trains, setTrains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace with your API URL
        axios.get('http://localhost:3000/api/trains')
            .then(response => {
                setTrains(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Train List</h1>
            <ul>
                {trains.map(train => (
                    <li key={train._id}>
                        <h2>{train.trainName}</h2>
                        <p>Train Number: {train.trainNumber}</p>
                        <p>Route: {train.routeName}</p>
                        <p>Start Station: {train.startStation}</p>
                        <p>End Station: {train.endStation}</p>
                        <p>Days: {train.days.join(', ')}</p>
                        <p>Current Direction: {train.currentDirection}</p>
                        <p>Status: {train.isActive ? 'Active' : 'Inactive'}</p>
                        <p>Express: {train.isExpress ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainList;
