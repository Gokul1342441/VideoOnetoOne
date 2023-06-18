import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/home';
import Room from './room/room';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
};

export default App;
