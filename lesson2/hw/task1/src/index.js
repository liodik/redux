import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 12, name: 'Jack' }));
store.dispatch(addUser({ id: 2, name: 'Tom' }));
store.dispatch(addUser({ id: 68, name: 'Bob' }));

store.dispatch(deleteUser(2));

const usersList = store.getState();
console.log(usersList);
