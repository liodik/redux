import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';
import store from './store';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 12, name: 'Jack' }));
store.dispatch(addUser({ id: 2, name: 'Tom' }));
store.dispatch(updateUser(2, { name: 'Bob', age: 17 }));
store.dispatch(deleteUser(12));

store.dispatch(increment());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(increment());
