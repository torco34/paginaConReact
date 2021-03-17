import React from "react";
import Header from "../components/Header";
import Buscador from "../components/Buscador";
import Lista from "../components/Lista";
import ContForm from "../components/ContForm";

import "../assets/styles/App.scss";

const App = () => {
	return (
		<div className="App">
			<Header
				parrafoH4="ENVIOS GRATIS"
				parrafh4="por compras mayor a $75000"
				bottonComprar="Comprar"
				servicioLink="Servicios Especiales de Entrega"
				diaLink="90 Días de cambios y/o devoluciones"
				sigueLink="Sigue tu pedido"
				contsctoLink="Contáctanos"
				conocerLink="ConócenosServicio al Clientegi"
			/>
			<Buscador />
			<Lista />
			<ContForm />
		</div>
	);
};

export default App;
