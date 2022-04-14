import React from 'react';
import { RiFahrenheitFill } from 'react-icons/ri';
/* This will be used to recreate the component by passing a prop rather than taking the info from the browser */
const CityDetailsM = (city) => (
  <div className="details-section">
    <div className="details-image">
      <img src={city.cityImage} alt="city" className="details-img" />
    </div>
    <div className="details-section-details">
      <div className="detail-line"><h5 className="details-city-name">{city.cityName}</h5></div>
      <div className="detail-line">
        <span className="details-span span1">{city.description}</span>
        <span className="details-span span2"><img src={city.icon} alt="city-icon" className="details-icon" /></span>
      </div>
      <div className="detail-line">
        <p className="temp-tag tag1"> Temperature: </p>
        <p className="temp-tag tag2">
          {' '}
          {city.temp}
          <RiFahrenheitFill />
        </p>
      </div>
      <div className="detail-line">
        <p className="temp-tag tag1"> Temperature feeling:</p>
        <p className="temp-tag tag2">
          {' '}
          {city.tempFeelsLike}
          <RiFahrenheitFill />
        </p>
      </div>
      <div className="detail-line">
        <p className="temp-tag tag1"> Pressure:</p>
        <p className="temp-tag tag2">{city.pressure}</p>
      </div>
      <div className="detail-line">
        <p className="temp-tag tag1"> Air Humidity:</p>
        <p className="temp-tag tag2">
          {' '}
          {city.humidity}
        </p>
      </div>
      <div className="detail-line">
        <p className="temp-tag tag1"> Visibility: </p>
        <p className="temp-tag tag2">
          {city.visibility}
          {' '}
          Km
        </p>
      </div>
    </div>
  </div>
);

export default CityDetailsM;
