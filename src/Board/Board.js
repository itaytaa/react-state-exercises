import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chosenBox: ''
		}

	}

	changeColor(num) {
		this.setState({ chosenBox: num })
	}

	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div onClick={this.changeColor.bind(this, 1)} className={this.state.chosenBox === 1 ? "Board-clicked" : "Board-option"}>1</div>
					<div onClick={this.changeColor.bind(this, 2)} className={this.state.chosenBox === 2 ? "Board-clicked" : "Board-option"} >2</div>
					<div onClick={this.changeColor.bind(this, 3)} className={this.state.chosenBox === 3 ? "Board-clicked" : "Board-option"}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;