import React from "react";
import "../assets/styles/components/Buscador.scss";
import carrito from "../assets/static/carritos.png";

class Buscador extends React.Component {
	render() {
		return (
			<div className="container_buscador">
				<div className="row">
					<div className="col-md-3 text-center  mt-3">
						<h1>dafiti</h1>
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
					<div className="col-md-3 section_carrito ">
						<a className="text-dark mt-3" href="">
							<span className="text-dark text-center">
								Registrarces
								<p>ENTRAR</p>
							</span>
						</a>
						<a href="">
							<img className="carrito" src={carrito} />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Buscador;
