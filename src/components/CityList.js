import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CityCard from './CityCard';

const CityList = () => {
  // useEffect(()=>{

  // },[])
  const [searchCity, setSearch] = useState('');
  const inputRef = useRef();
  const searchFunc = (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    setSearch(inputVal);
  };
  const cities = useSelector((state) => state.cityWeathers);
  const searchResult = cities.filter((city) => { /*eslint-disable-line*/
    if (searchCity === '') {
      return city;
    }
    if (city.cityName.includes(searchCity)) {
      return city;
    }
  }).map((c) => (<NavLink className="list-group-item" id={c.id} key={c.id} to={`/Details/${c.cityName}`}><CityCard cityImage={c.cityImage} cityCountry={c.cityCountry} cityName={c.cityName} /></NavLink>));

  return (
    <div>
      <div className="filter-span">
        <form className="filter-form" onSubmit={searchFunc}>
          <input type="text" placeholder="select specific city..." ref={inputRef} className="filter-text" />
          <button type="submit" className="filter-submit">Filter</button>
        </form>
      </div>
      {searchResult}
    </div>
  );
};

export default CityList;
