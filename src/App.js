import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CityList from './components/CityList';
import CityDetail from './components/CityDetails';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={CityList} />
        <Route path="/Details" element={CityDetail}>
          <Route path=":cityName" element={CityDetail} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
