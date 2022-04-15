import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import logger from 'redux-logger';
import CityWeather from './cities/cities';

const rootReducer = combineReducers({
  cityWeathers: CityWeather,
});

const store = createStore(rootReducer, applyMiddleware(Thunk, logger));

export default store;
