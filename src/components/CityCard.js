import React from 'react';

const CityCard = (props) => {
  const { cityImage, cityCountry, cityName} = props;
  return (
    <div className ="city-card">
      <div className="image-cont">
        <img src={cityImage} />
      </div>
      <h4> {cityName}: {cityCountry}</h4>
    </div>
  );
};

export default CityCard;