import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import store from './store';

store.subscribe(() => console.log(store.getState()));
console.log(store.getStore);

store.dispatch(addProduct({ id: 12, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'bread' }));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());
store.dispatch(removeProduct(12));

store.dispatch(setLanguage('ua'));
