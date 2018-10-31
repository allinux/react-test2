import React from "react";
import ReactDOM from "react-dom";
import My from "./components/My";
import My2, { MyName } from "./components/My2";
import MyBlock from "./components/Block";
import MyProducts from "./components/MyProducts";
import MyCard from "./components/MyCard";
import "./styles.css";

function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<My />
			<My2 myvalue="zzzz" />
			<MyName name="yhjung" />
			<div>
				<MyBlock color="blue" bgColor="red">
					A
				</MyBlock>
				<MyBlock color="yellow" bgColor="black">
					E
				</MyBlock>
				<MyBlock color="orange" bgColor="gray">
					I
				</MyBlock>
				<MyBlock color="cron" bgColor="brown">
					O
				</MyBlock>
				<MyBlock color="cron" bgColor="brown">
					R
				</MyBlock>
				{[...Array(3)].map((v, i) => (
					<MyBlock key={i}>{v}</MyBlock>
				))}
			</div>
			<div>
				<MyProducts />
			</div>

			<div className="Container">
				<MyCard />
				<MyCard />
				<MyCard />
			</div>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
