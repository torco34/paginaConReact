import React from "react";

class ContForm extends React.Component {
	render() {
		return (
			<div className=" ">
				<div className="row">
					<div className="col-md-5">
						<h4>CLIENTES REGISTRADOS</h4>
					</div>
					<div className="col-md-5">
						<h4>NUEVOS CLIENTES</h4>
						<hr className="" />

						<form action=" card">
							<p className="">
								Bienvenido a Dafiti Colombia. Registrate y sé
								parte de nuestra tienda de moda online.
							</p>
							<p className="">*Compos obligatorios</p>
							<div className="from">
								<lebel>E.mail</lebel>
								<input
									onChange={this.props.onChange}
									className=""
									type="text"
									name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>
							<div className="from">
								<lebel>Contraseña*</lebel>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>
							<div className="from">
								<lebel>Confirmar contraseña * </lebel>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>
							<div className="from">
								<lebel>Nombre * </lebel>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>
							<div className="from">
								<lebel>Apellidos * </lebel>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContForm;
