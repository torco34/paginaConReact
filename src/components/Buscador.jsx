import React, { Component } from "react";
import "../assets/styles/components/Buscador.scss";
import carrito from "../assets/static/carritos.png";

class Buscador extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3 text-center">
					<h1>dafiti</h1>
				</div>
				<div className="col-md-6">
					<div className="text-center">
						<form action="">
							<input
								type="text"
								className="form_Buscar"
								placeholder="Buscar por producto"
							/>
							<input
								type="submit"
								className="btn  btn-dark"
								valua="Buscar..."
							/>
						</form>
					</div>
				</div>
				<div className="col-md-3 section_carrito">
					<a href="">
						<p className="m-3 text-dark">
							Registrarces <p>ENTRAR</p>
						</p>
					</a>
					<a href="">
						<img className="carrito" src={carrito} />
					</a>
				</div>
			</div>
		);
	}
}
export default Buscador;
