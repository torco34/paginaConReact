import React, { Component } from "react";
import propTypes from "prop-types";
// importando las proptypes q ayudan especificar que tipo de elemento
// son los props arrays, strings, números, etc.
import "../assets/styles/components/Buscador.scss";
import carrito from "../assets/static/carritos.png";
const name = "torco";
class Buscador extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3 text-center">
					<h1>dafiti</h1>
					<h2>hola soy: {name}</h2>
				</div>
				<div className="col-md-6">
					<div className="text-center">
						<form action="">
							<input
								type="search"
								className="form_Buscar"
								placeholder="Buscar por producto"
							/>

							<input
								type="submit"
								className="btn btn-dark"
								value="Buscar"
							/>
						</form>
					</div>
				</div>
				<div className="col-md-3 section_carrito">
					<a href="">
						<span className="m-3 text-dark text-center">
							Registrarces
							<p>ENTRAR</p>
						</span>
					</a>
					<a href="">
						<img className="carrito" src={carrito} />
					</a>
				</div>
			</div>
		);
	}
}
Buscador.propTypes = {
	// en esta parte validamos las props con un objeto ejemplo
	title: propTypes.string,
	year: propTypes.number,
};

export default Buscador;
