import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CityCard from '../components/CityCard';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';

describe('Testing Mission', () => {
  it('Testing Mission component snapshot', () => {
    const element = {
      id: 'key1',
      cityName: 'TEST ROCKET',
      cityCountry: 'TEST DESCRIPTION',
      cityImage: 'https://imgur.com/DaCfMsj.jpg',
    };
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <CityCard
          key="key1"
          cityName={element.cityName}
          cityCountry={element.cityCountry}
          cityImage={element.cityImage}
        />
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});
