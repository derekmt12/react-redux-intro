let initialState = {
    search: '',
    cars: []
};

export default function carsReducer(state = initialState, action) {
    switch(action.type) {
        case 'cars.SEARCH':
            return { ...state, search: action.search };
        case 'cars.ADD':
            return { ...state, cars: state.cars.concat(action.car) };
        case 'cars.DELETE':
            return {
                ...state,
                cars: [
                    ...cars.slice(0, action.index),
                    ...cars.slice(action.index + 1)
                ]
            };
        default:
            return state;
    }
}