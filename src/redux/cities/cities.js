// Action type
const GETDATA = 'city-weather-app/src/redux/cities/GET_API_DATA';

// Synchronous Action Creator
// const getApi = (payload) => ({
//   type: GETDATA,
//   data: payload,
// });

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
