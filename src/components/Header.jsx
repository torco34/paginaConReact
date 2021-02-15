import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="card bg-secondary">
				<div className="row ">
					<div className="text-center col-md-9 ">
						<h5 className="m-3">
							Tus{" "}
							<mark className="btn text-white btn-primary">
								cambio o devulucion en tu App:
							</mark>{" "}
							y tambien dede tu movil o cumputador..
						</h5>
					</div>
					<div className="col-md-3 ">
						<button className=" btn  btn-primary m-3">
							conocer mas
						</button>
					</div>
					<p className="parrafo"> Servicios Especiales de Entrega</p>
					<p> 90 Días de cambios y/o devoluciones</p>
					<p> Sigue tu pedido</p>
					<p> Contáctanos</p>
					<p> ConócenosServicio al Cliente</p>
				</div>
			</div>
		);
	}
}
export default Header;
