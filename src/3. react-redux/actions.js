
export function receiveCars(cars) {
    return {
        type: 'cars.RECEIVE',
        cars: cars
    };
}

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

export function deleteCar(id) {
    return {
        type: 'cars.DELETE',
        id: id
    };
}