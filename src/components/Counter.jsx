import React from "react";

/* const Counter = ({ number, onIncrement, onDecrement }) => {
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={onIncrement}>증가 (+)</button>
			<button onClick={onDecrement}>감소 (-)</button>
		</div>
	);
};

Counter.defaultProps = {
	number: 0
}; */

class Counter extends React.Component {
	static defaultProps = {
		number: 0,
		onIncrement: () => {},
		onDecrement: () => {}
	};

	render() {
		return (
			<div>
				<h1>{this.props.number}</h1>
				<button onClick={this.props.onIncrement}>증가 (+)</button>
				<button onClick={this.props.onDecrement}>감소 (-)</button>
			</div>
		);
	}
}

export default Counter;
