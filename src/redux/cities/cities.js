// Action type
const GETDATA = 'city-weather-app/src/redux/cities/GET_API_DATA';

// Synchronous Action Creator
const getApi = (payload) => ({
  type: GETDATA,
  data: payload,
});

const initialState = [{
  cityName: 'New york',
  id: 5125125,
  cityCountry: 'US',
  cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
}, {
  cityName: 'mumbai',
  id: 5125126,
  cityCountry: 'US',
  cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
}, {
  cityName: 'paris',
  id: 5125127,
  cityCountry: 'US',
  cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
}];

// Asynchronous action
/* eslint-disable prefer-destructuring */

export const getApiData = () => async (dispatch) => {
  const listOfCities = [{
    cityName: 'New york',
    cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
  }, {
    cityName: 'mumbai',
    cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
  }, {
    cityName: 'paris',
    cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
  }];
  const cities = await Promise.all(listOfCities.map(async (city) => {
    const searchName = city.cityName.replace(/ /g, '+');
    const rawCityData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=5cbd72262755db9398286c3cd58a219a&units=imperial`);
    const cityData = await rawCityData.json();
    // new city Props
    const id = cityData.id;
    const icon = `http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`;
    const mainDesc = cityData.weather[0].main;
    const description = cityData.weather[0].description;
    const temp = cityData.main.temp;
    const tempFeelsLike = cityData.main.feels_like;
    const pressure = cityData.main.pressure;
    const humidity = cityData.main.humidity;
    const visibility = cityData.visibility;
    const cityCountry = cityData.sys.country;
    const newData = {
      id,
      icon,
      mainDesc,
      description,
      temp,
      tempFeelsLike,
      pressure,
      humidity,
      visibility,
      cityCountry,
    };
    return { ...city, ...newData };
  }));
  console.log(cities);
  dispatch(getApi(cities));
};

// Reducer
const CityWeather = (state = initialState, action) => {
  switch (action.type) {
    case GETDATA:
      return action.data;
    default:
      return state;
  }
};

export default CityWeather;
