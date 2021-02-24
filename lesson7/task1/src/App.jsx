import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './tasks/components/TasksList';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
