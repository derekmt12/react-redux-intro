import React from 'react';

let CarTile = ({ car, onDelete }) =>
    <div className="panel panel-default">
        <div className="panel-heading clearfix" style={{lineHeight: '35px'}}>
            <span>{car.name}</span>
            <button type="button" className="btn btn-primary pull-right" onClick={onDelete.bind(this, car)}>Delete</button>
        </div>
        <div className="panel-body text-center">
            <img src={car.imageUrl} alt={car.name} style={{width:'100%'}} />
        </div>
    </div>;

export default CarTile;