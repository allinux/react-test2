import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import My from "./components/My";
import My2, { MyName } from "./components/My2";
import MyBlock from "./components/Block";
import MyProducts from "./components/MyProducts";
import MyCard from "./components/MyCard";
import PhoneForm from "./components/PhoneForm";

import CounterContainer from "./containers/CounterContainer";
import "./styles.css";

var handleCreate = data => {
	console.log(data);
};

function App() {
	return (
		<Provider store={store}>
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

				<PhoneForm onCreate={handleCreate} />
				<div>
					<CounterContainer />
				</div>
			</div>
		</Provider>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
