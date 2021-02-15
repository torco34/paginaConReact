import React, { Component } from "react";
import "../assets/styles/components/Header.scss";
class Header extends Component {
	render() {
		return (
			<div className=" container_header">
				<div className="row ">
					<div className="text-center col-md-9 ">
						<p className="m-3">
							Tus
							<mark className="mark ">
								cambio o devulucion en tu App:
							</mark>
							y tambien desde tu movil o cumputador..
						</p>
					</div>
					<div className="col-md-3 ">
						<button className=" btn  boton m-4">conocer mas</button>
					</div>
				</div>
				<div className="col-md-12">
					<ul className="lista">
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
