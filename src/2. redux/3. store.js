import { createStore } from 'redux';
import carsReducer from './carsReducer';


//TODO: show combineReducers

export function configureStore() {
    return createStore(carsReducer);
}