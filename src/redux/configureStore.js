import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import CityWeather from './cities/cities';

const rootReducer = combineReducers({
  cityWeathers: CityWeather,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
