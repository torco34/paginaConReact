import React from "react";
import Header from "../components/Header";
import Buscador from "../components/Buscador";
import Lista from "../components/Lista";
import "../assets/styles/App.scss";

const App = () => (
	<div className="App">
		<Header />
		<Buscador />
		<Lista />
	</div>
);

export default App;
