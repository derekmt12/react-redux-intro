import React from 'react';

let CarTile = ({ manufacturer, model, cost }) =>
    <div>
        <h2>{manufacturer} {model}</h2>
        <div>{cost}</div>
    </div>;

export default CarTile;