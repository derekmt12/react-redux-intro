import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchCars, receiveCars, deleteCar } from './actions';
import CarTile from './CarTile';

class ReactRedux extends Component {
	render() {
		const { cars, search } = this.props;
		return (
			<div className="container" style={{paddingTop: '20px'}}>
				<div>
					<label>Search</label>
					<input type="text" className="form-control"
						value={search}
						onChange={this.onSearchChange.bind(this)}
						style={{width: '300px'}}/>
				</div>
				<div className="row" style={{paddingTop: '20px'}}>
					{ !cars.length && <div className="well">No Results</div> }
					{ cars.map((car, index) =>
						<div key={index} className="col-md-4">
							<CarTile car={car} onDelete={this.onDelete.bind(this)} />
						</div>
					)}
				</div>
			</div>
		);
	}

	componentDidMount() {
		const { dispatch } = this.props;

		fetch('cars.json')
			.then(response => response.json())
			.then(cars => dispatch(receiveCars(cars)));
	}

	onSearchChange(event) {
		const { dispatch } = this.props;
		let newSearch = event.target.value;

		dispatch(searchCars(newSearch));
	}

	onDelete(car) {
		const { dispatch } = this.props;
		dispatch(deleteCar(car.id));
	}
}

function mapStateToProps(state) {
	let cars = state.search
		? state.cars.filter(car => car.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
		: state.cars;
	return {
		cars: cars,
		search: state.search
	};
}

export default connect(mapStateToProps)(ReactRedux);
