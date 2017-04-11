import React from 'react';
import CarTile from '../4. conditional rendering/CarTile';

let CarList = ({ cars }) =>
    <div>
        { cars.map((car, index) => <CarTile key={index} car={car} />) }
    </div>;

export default CarList;