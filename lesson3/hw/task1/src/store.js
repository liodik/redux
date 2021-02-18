import { createStore, combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import usersReducer from './user.reducer';
import languageReducer from './language.reducer';

const appReducer = combineReducers({
  cart: cartReducer,
  user: usersReducer,
  language: languageReducer,
});

const store = createStore(appReducer);

export default store;
