import React, { Component } from "react";
import "../assets/styles/components/Buscador.scss";
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
				<div className="col-md-3">
					<a href="">
						<p className="m-3">
							Registrarce <p>ENTRAR</p>
						</p>
					</a>
					<a href="">
						<span>Carrito de compras</span>
					</a>
				</div>
			</div>
		);
	}
}
export default Buscador;
