import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CityDetailsM from './__Mocks__/CityDetailsMock';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';

describe('Testing Mission', () => {
  it('Testing Mission component snapshot', () => {
    const cityObj = {
      cityCountry: "MX",
      cityImage: "https://www.elsoldemexico.com.mx/metropoli/cdmx/58gppj-cdmx-…ntro%20de%20las%20100%20mejores%20ciudades%20del%20mundo.png",
      cityName: "Ciudad de Mexico",
      description: "broken clouds",
      humidity: 22,
      icon: "http://openweathermap.org/img/wn/04d@2x.png",
      id: 3530597,
      mainDesc: "Clouds",
      pressure: 1016,
      temp: 80.19,
      tempFeelsLike: 78.8,
      visibility: 10000
    }
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <CityDetailsM city={cityObj}/>
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});
