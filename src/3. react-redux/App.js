import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCars } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		const { cars, search } = this.props;
		return (
			<div className="App">
				<div>
					<label>Search</label>
					<input type="text" value={search} onChange={this.onSearchChange.bind(this, e.target.value)} />
				</div>
				<ul>
					{ cars.map((car, index) => {
						<li key={index}>{car.name}</li>
					})}
				</ul>
			</div>
		);
	}

	onSearchChange(search) {
		const { dispatch } = this.props;
		dispatch(searchCars(search));
	}
}

function mapStateToProps(state) {
	let cars = state.search
		? state.cars.filter(car => car.name.indexOf(state.search) > -1)
		: state.cars;
	return {
		cars: cars,
		search: state.search
	};
}

export default connect(mapStateToProps)(App);
