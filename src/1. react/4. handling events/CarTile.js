import React from 'react';

let CarTile = ({ car, onDelete }) =>
    <div>
        <h2>{car.manufacturer} {car.model}</h2>
        <div>{car.cost}</div>
        <div>
            <button type="button" onClick={onDelete.bind(this, car)}>Delete</button>
        </div>
    </div>;

export default CarTile;