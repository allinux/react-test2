import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Div = styled.div`
	font-size: 3em;
	text-align: center;
`;

var name = "aaaaaaa";

export default class My2 extends Component {
	static defaultProps = {
		myvalue: "default"
	};

	div = {
		fontSize: "30px",
		textTransform: "none"
	};

	sMy2 = {
		textAlign: "center"
	};

	constructor() {
		super();
	}

	onClickTest = e => {
		alert("aaaa");
	};

	render() {
		return (
			<div className="My2">
				<span>11111</span>
				<Button onClick={this.onClickTest} style={this.div} variant="contained" color="primary">
					{name} {this.props.myvalue}
				</Button>
			</div>
		);
	}
}

export const MyName = ({ name }) => {
	return <div>Hello {name}</div>;
};

ReactDOM.render(<My2 />, document.querySelector("#root2"));
