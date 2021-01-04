import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
			update: this.update()
		}
	}
	update() {
		setInterval(() => {
			this.setState({
				date: new Date()
			})
		}, 1000)
	}

	render() {
		return (
			<div>
				<h1>Clock</h1>
		
				The time is:   {this.state.date.toLocaleString("en-US", {hour: "2-digit", minute: "2-digit", second:"2-digit"})}
			</div>
		);
	}
}

export default Clock;