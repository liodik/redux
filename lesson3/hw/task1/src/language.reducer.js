import { SETTER } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SETTER:
      return {
        language: action.payload.lang,
      };

    default:
      return state;
  }
};

export default languageReducer;
