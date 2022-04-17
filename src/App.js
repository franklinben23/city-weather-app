import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CityList from './components/CityList';
import CityDetails from './components/CityDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/Details" element={<CityDetails />}>
          <Route path=":cityName" element={<CityDetails />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
