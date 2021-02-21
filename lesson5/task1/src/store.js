import { createStore, combineReducers } from 'redux';
import usersReduser from './users/users.reducer';

const reducer = combineReducers({
  users: usersReduser,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
