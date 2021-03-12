import React, { Component } from "react";
import "../assets/styles/components/Header.scss";
class Header extends Component {
	verCompra() {
		alert("Mostrar lo que vas a comprar");
	}
	render() {
		return (
			<div className="container_header">
				<div className="row ">
					<div className=" col-md-9 container">
						<a href="" className="text-center ">
							<h4 className="">
								<span className="fw-bold  word-spacing text-dark">
									{this.props.parrafoH4}
								</span>

								<span className="  text-light text-wrap m-2 ">
									{this.props.parrafh4}
								</span>
							</h4>
						</a>
					</div>
					<div className="col-md-3 mark  ">
						<button
							className=" btn  boton m-2"
							onClick={() => this.verCompra()}
						>
							{this.props.bottonComprar}
						</button>
					</div>
					<div className="col-md-12">
						<ul className="lista text-center">
							<li>
								<a href="">{this.props.servicioLink}</a>
							</li>
							<li>
								<a href="">{this.props.diaLink}</a>
							</li>
							<li>
								<a href=""> {this.props.sigueLink}</a>
							</li>
							<li>
								<a href="">{this.props.contsctoLink}</a>
							</li>
							<li>
								<a href="">{this.props.conocerLink}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Header;
