import { fetchWeatherData } from './weather.gateway';

export const WEATHER_DATA_RECEIVE = 'WEATHER_DATA_RECEIVE';

export const weatherDataReceive = weatherData => {
  return {
    type: WEATHER_DATA_RECEIVE,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(weatherData => {
      dispatch(weatherDataReceive(weatherData));
    });
  };
};
