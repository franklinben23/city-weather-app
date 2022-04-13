import React from 'react';

const CityCard = (props) => {
  const { cityImage, cityCountry, cityName } = props;
  return (
    <div className="city-card">
      <div className="image-cont">
        <img src={cityImage} alt="city-weather" className="city-img" />
      </div>
      <p className="city-span">
        {' '}
        {cityName}
        :
        {' '}
        {cityCountry}
      </p>
    </div>
  );
};

export default CityCard;
