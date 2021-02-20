import React, { Component } from "react";
import "../assets/styles/components/Lista.scss";
class Lista extends Component {
	render() {
		return (
			<div className="container_lista  ">
				<nav className="text-center">
					<ul>
						<li className="active ">
							<a className="espacio " href="">
								FEMENINO
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								MASCULINO
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								DEPORTES
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								NINOS
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								BELLEZA Y CUIDODO
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								OFERTAS
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								PREMIUM
							</a>
						</li>
						<li>
							<a className="espacio" href="">
								MARCAS
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
export default Lista;
