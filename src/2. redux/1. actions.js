
export function searchCars(query) {
    return {
        type: 'cars.SEARCH',
        search: query
    };
}

export function addCar(car) {
    return {
        type: 'cars.ADD',
        car: car
    };
}

export function deleteCar(car) {
    return {
        type: 'cars.ADD',
        car: car
    };
}