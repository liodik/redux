import './index.scss';
import { store, increment, decrement } from './counter.js';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
