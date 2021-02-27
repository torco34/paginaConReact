import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Buscador from "../components/Buscador";
import Lista from "../components/Lista";
import Formulario from "../components/Formulario";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";
// La API esta en esta constate
// Es una api que no he descagado 'no me pare importate
// en este proyecto, el nocemiento y la y el entender si'
const API = "http://localhost:3000/useInitialState";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Buscador />
			<Lista />
			<Formulario />
		</div>
	);
};

export default App;
