import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="card">
				<div className="row ">
					<div className="text-center col-md-9 ">
						<h5 className="m-3">
							Tus{" "}
							<mark className="bg-danger text-white">
								cambio o devulucion en tu App:
							</mark>{" "}
							y tambien dede tu movil o cumputador..
						</h5>
					</div>
					<div className="col-md-3 ">
						<button className=" btn  btn-danger m-3">
							conocer mas
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Header;
