import React, { Component } from 'react';

export default class CarTile extends Component {
    render() {
        const { car } = this.props;

        if (!car.manufacturer || !car.model) {
            return null;
        }

        return (
            <div>
                <h2>{car.manufacturer} {car.model}</h2>
                <div>Cost: {car.cost}</div>
                { car.type && <div>Type: {car.type}</div>}
            </div>
        );
    }
}