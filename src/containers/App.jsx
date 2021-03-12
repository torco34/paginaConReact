import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Buscador from "../components/Buscador";
import Lista from "../components/Lista";
import Formulario from "../components/Formulario";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";
// La API esta en esta constate
// const API = "http://localhost:3000/useInitialState";

// Es una api que no he descagado. 'no me pare importate
// en este proyecto, el nocemiento y la y el entender si'

const App = () => {
	return (
		<div className="App">
			<Header
				parrafoH4="ENVIOS GRATIS"
				parrafh4="por compras mayor a $75000"
			/>
			<Buscador />
			<Lista />
			<Formulario />
		</div>
	);
};

export default App;
