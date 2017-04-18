import { createStore } from 'redux';
import carsReducer from './carsReducer';

export default function configureStore() {
    return createStore(carsReducer);
}