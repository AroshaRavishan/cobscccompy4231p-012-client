// src/App.js
import React from 'react';
import TrainList from './components/TrainList';

const App = () => {
  return (
    <div className="App">
      <h1 className='text-primary'>Welcome to the Train Information System</h1>
      <TrainList />
    </div>
  );
};

export default App;
