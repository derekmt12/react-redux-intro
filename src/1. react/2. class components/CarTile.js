import React, { Component } from 'react';

export default class CarTile extends Component {
    render() {
        const { car } = this.props;
        return (
            <div className="car-tile" style={{ marginBottom: '5px', marginRight: '5px' }}>
                <h2>{car.manufacturer} {car.model}</h2>
                <div>{car.cost}</div>
            </div>
        );
    }
}