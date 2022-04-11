// Action type
const GETDATA = 'city-weather-app/src/redux/cities/GET_API_DATA';

// Synchronous Action Creator
const getApi = (payload) => ({
  type: GETDATA,
  data: payload,
});

// Reducer
const CityWeather = (state = [], action) => {
  switch (action.type) {
    case GETDATA:
      return action.data;
    default:
      return state;
  }
};

export default CityWeather;
