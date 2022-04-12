import React from 'react';

const CityCard = (props) => {
  const { cityImage, cityCountry, cityName } = props;
  return (
    <div className="city-card">
      <div className="image-cont">
        <img src={cityImage} alt="city-weather" className="city-img" />
      </div>
      <h4 className="city-span">
        {' '}
        {cityName}
        :
        {' '}
        {cityCountry}
      </h4>
    </div>
  );
};

export default CityCard;
