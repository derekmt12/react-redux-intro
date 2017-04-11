import React, { Component } from 'react';
import 'whatwg-fetch';

export default class CarTile extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            reviews: []
        };
    }

    componentDidMount() {
        const { car } = this.props;

        fetch(`car/${car.id}/reviews`).then(response => {
            this.setState({
                reviews: response.json()
            });
        });
    }

    render() {
        const { car } = this.props;
        return (
            <div>
                <h2>{car.manufacturer} {car.model}</h2>
                <div>{car.cost}</div>
                { this.state.reviews.slice(0, 3).map((review, i) =>
                    <div>
                        <h4>{review.title}</h4>
                        <div>{review.rating}/5</div>
                        <p>{review.text}</p>
                    </div>
                ) }
            </div>
        );
    }
}