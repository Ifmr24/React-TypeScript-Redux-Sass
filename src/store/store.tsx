import {createStore} from 'redux';
import {initialReducer} from './reducers';

const store = createStore(initialReducer);

export default store;