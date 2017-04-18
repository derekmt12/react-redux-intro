import { createStore, combineReducers } from 'redux';
import carsReducer from './carsReducer';
import reviewsReducer from './reviewsReducer';

export function configureStore() {
    let rootReducer = combineReducers({
        cars: carsReducer,
        reviews: reviewsReducer
    });

    return createStore(rootReducer);
}