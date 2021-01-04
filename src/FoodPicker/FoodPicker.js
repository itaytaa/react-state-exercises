import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '[NAME]',
			restaurat: '[REST]',
			meal: '[MEAL]',
			addDesert: false
		}
	}
	onNamechange(e) {
		this.setState({name: e.target.value})
	}
	onMealchange(e) {
		this.setState({meal: e.target.value})
	}
	onRestSelect(e) {
		this.setState({ restaurat: e.target.value });
	}
	onDesertChange(e){
		this.setState({addDesert:!this.state.addDesert})
	}

	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" onChange={this.onNamechange.bind(this)} />
				</div>
				<div>
					Choose restaurant:
					<select value={this.state.restaurat} onChange={this.onRestSelect.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" onChange={this.onMealchange.bind(this)} />
				</div>
				<div>
					Want a desert?
					<input type="checkbox" onChange={this.onDesertChange.bind(this)} />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurat}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					{this.state.addDesert && <span>Additionally, our chef will make a special desert for you!<br /></span>}
				</div>
			</div>
		);
	}
}

export default FoodPicker;