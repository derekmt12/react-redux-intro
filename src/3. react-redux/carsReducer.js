let initialState = {
    search: '',
    cars: []
};

export default function carsReducer(state = initialState, action) {
    switch(action.type) {
        case 'cars.RECEIVE':
            return { ...state, cars: action.cars };
        case 'cars.SEARCH':
            return { ...state, search: action.search };
        case 'cars.ADD':
            return { cars: [...state.cars, action.car] };
        case 'cars.DELETE':
            let index = state.cars.map(c => c.id).indexOf(action.id);
            return {
                ...state,
                cars: [
                    ...state.cars.slice(0, index),
                    ...state.cars.slice(index + 1)
                ]
            };
        default:
            return state;
    }
}