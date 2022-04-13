import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiFahrenheitFill } from 'react-icons/ri';
import './cityDetails.css';

const CityDetails = () => {
  const params = useParams();
  const specificCity = params.cityName;
  const cities = useSelector((state) => state.cityWeathers);
  const city = cities.find((city) => city.cityName === specificCity);
  console.log(city);
  return (
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
};

export default CityDetails;
