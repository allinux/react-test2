import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class MyBlock extends Component {
	boxStyle = {
		display: "inline-block",
		padding: "10px",
		margin: "10px",
		color: this.props.color,
		backgroundColor: this.props.bgColor,
		fontFamily: "monospace"
	};
	render() {
		return <div style={this.boxStyle}>{this.props.children}</div>;
	}
}
