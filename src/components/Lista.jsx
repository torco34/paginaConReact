import React, { Component } from "react";

class Lista extends Component {
	render() {
		return (
			<div className="container_lista">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<li>
						<a href="">FEMENINO</a>
					</li>
					<li>
						<a href="">MASCULINO</a>
					</li>
					<li>
						<a href="">DEPORTES</a>
					</li>
					<li>
						<a href="">NINOS</a>
					</li>
					<li>
						<a href="">BELLEZA Y CUIDADO</a>
					</li>
					<li>
						<a href="">OFERTAS</a>
					</li>
					<li>
						<a href="">PREMIUM</a>
					</li>
					<li>
						<a href="">MARCAS</a>
					</li>
				</nav>
			</div>
		);
	}
}
export default Lista;
