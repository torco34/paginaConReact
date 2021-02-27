import React, { Component } from "react";
import "../assets/styles/components/Header.scss";
class Header extends Component {
	verCompra() {
		alert("Mostrar lo que vas a comprar");
	}
	render() {
		return (
			<div className=" container_header ">
				<div className="row ">
					<div className="text-center col-md-9 mark ">
						<h6 className="m-3 text-center">
							<strong className="text-dark container-fluid lg">
								<u className="lg">ENVIOS DIA SIGUIENTE</u>
							</strong>{" "}
							en Cali, Yonbo, Medillin Sabaneta, Enviga Itagui, La
							Estrella por $ 12000
						</h6>
					</div>
					<div className="col-md-3 mark ">
						<button
							className=" btn  boton m-2"
							onClick={() => this.verCompra()}
						>
							conoce mas
						</button>
					</div>
				</div>

				<div className="col-md-12">
					<ul className="lista text-center">
						<li>
							<a href="">Servicios Especiales de Entrega</a>
						</li>
						<li>
							<a href="">90 Días de cambios y/o devoluciones</a>
						</li>
						<li>
							<a href="">Sigue tu pedido</a>
						</li>
						<li>
							<a href="">Contáctanos</a>
						</li>
						<li>
							<a href="">ConócenosServicio al Clientegit</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Header;
