import React from "react";

class Formulario extends React.Component {
	handleClick() {
		alert("El onclick funciona ...");
		console.log("El onclick funciona ...");
	}

	render() {
		return (
			<div className="text-center col-md-9  ">
				<button
					className="btn btn-info"
					onClick={() => this.handleClick()}
				>
					oprimame
				</button>
			</div>
		);
	}
}

export default Formulario;
