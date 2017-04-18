import React, { Component } from 'react';

export default class ReactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            salutation: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <div>
                    <label>Full Name</label>
                    <input name="fullName" type="text" value={this.state.fullName} onChange={this.onInputChange.bind(this)} />
                </div>
                <div>
                    <label>Salutation</label>
                    <select name="salutation" value={this.state.salutation} onChange={this.onInputChange.bind(this)}>
                        <option value="">Choose One</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }

    onInputChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    submitForm(event) {
        event.preventDefault();

        let { salutation, fullName } = this.state;

        alert(`Hello, ${salutation} ${fullName}!`);
    }
}