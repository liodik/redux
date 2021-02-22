import { WEATHER_DATA_RECEIVE } from './weather.actions';

const initialData = {
  weatherData: null,
};

export const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVE: {
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    }
    default:
      return state;
  }
};
