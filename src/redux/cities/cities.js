// Action type
const GETDATA = 'city-weather-app/src/redux/cities/GET_API_DATA';

// Synchronous Action Creator
const getApi = (payload) => ({
  type: GETDATA,
  data: payload,
});

// Asynchronous action
/* eslint-disable prefer-destructuring */

export const getApiData = () => async (dispatch) => {
  const listOfCities = [{
    cityName: 'New york',
    cityImage: 'https://static.anuevayork.com/wp-content/uploads/2020/06/16084125/Guia-de-Nueva-York-en-espanol-Empire-State-Building-scaled.jpg',
  },
  {
    cityName: 'Los Angeles',
    cityImage: 'https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg',
  },
  {
    cityName: 'Ciudad de Mexico',
    cityImage: 'https://www.elsoldemexico.com.mx/metropoli/cdmx/58gppj-cdmx-dentro-de-las-100-mejores-ciudades-del-mundo.png/ALTERNATES/LANDSCAPE_1140/CDMX%20dentro%20de%20las%20100%20mejores%20ciudades%20del%20mundo.png',
  },
  {
    cityName: 'Mumbai',
    cityImage: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
  },
  {
    cityName: 'Paris',
    cityImage: 'https://media.cntraveler.com/photos/5cf96a9dd9fb41f17ed08435/master/pass/Eiffel%20Tower_GettyImages-1005348968.jpg',
  },
  {
    cityName: 'London',
    cityImage: 'https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium',
  },
  {
    cityName: 'Madrid',
    cityImage: 'https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id1297090032?k=20&m=1297090032&s=170667a&w=0&h=Qa_DyLiwIcrWwiV_jQp9pLM2yCDuymqwveCbLOsdWjY=',
  },
  {
    cityName: 'Barcelona',
    cityImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyY2Vsb25hJTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    cityName: 'Berlin',
    cityImage: 'https://media.istockphoto.com/photos/berlin-skyline-with-spree-river-at-sunset-germany-picture-id486585530?k=20&m=486585530&s=612x612&w=0&h=FnNkM2BgTNv5-WQUpT2iB5R_0YSeW32RnLP7FYzOVVY=',
  },
  {
    cityName: 'Milan',
    cityImage: 'https://media.timeout.com/images/105186767/750/422/image.jpg',
  },
  {
    cityName: 'El cairo',
    cityImage: 'https://media.informabtl.com/wp-content/uploads/2019/05/a8cac080-el-cairo.jpg',
  },
  {
    cityName: 'Beijing',
    cityImage: 'https://www.tripsavvy.com/thmb/LkZ9tuEaT2CgpFUJRZ0R73yJbh0=/2119x1192/smart/filters:no_upscale()/beijing-central-business-district-buildings-skyline--china-cityscape-477749918-ddee5166b7474fd881b53f87244cc6d2.jpg',
  },
  {
    cityName: 'Tokio',
    cityImage: 'https://ep01.epimg.net/elviajero/imagenes/2020/04/30/actualidad/1588237365_988791_1588237524_noticia_normal.jpg',
  },
  {
    cityName: 'Seoul',
    cityImage: 'https://www.webuildvalue.com/wp-content/uploads/seoul-megacity-crescita-sostenibile.jpg',
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
  dispatch(getApi(cities));
};

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
