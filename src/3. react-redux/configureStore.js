import { createStore } from 'redux';
import carsReducer from './carsReducer';

export function configureStore() {
    return createStore(carsReducer);
}