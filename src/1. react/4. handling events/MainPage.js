import React, { Component } from 'react';
import CarTile from './CarTile';

export default class MainPage extends Component {
    deleteCar(car) {
        // delete the car
    }

    render() {
        return (
            <div>
                <CarTile onDelete={deleteCar} />
            </div>
        );
    }
}