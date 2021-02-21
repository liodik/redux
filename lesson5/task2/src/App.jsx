import React from 'react';
import TrasferList from './options/TransferList';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <TrasferList />
    </Provider>
  );
};

export default App;
