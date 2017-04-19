import { createStore } from 'redux';
import carsReducer from './carsReducer';
import DevTools from './DevTools';

let enhancer = DevTools.instrument();

export default function configureStore(initialState) {
    return createStore(carsReducer, initialState, enhancer);
}