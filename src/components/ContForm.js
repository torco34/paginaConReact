import React from "react";

class ContForm extends React.Component {
	render() {
		return (
			<div className="card container_form">
				<div className="row">
					<div className="col-md-5">
						<h4>CLIENTES REGISTRADOS</h4>
						<hr />
						<form action=" mt-3 m-5">
							<p className="">Campos obligatorios *</p>
							<div className="">
								<label>E-mail *</label>
								<input
									// onChange={this.props.onChange}
									className=""
									type="text"
									name=""
								/>
							</div>

							<div className="">
								<label>Contraseña *</label>

								<input
									// onChange={this.props.onChange}
									className=""
									type="text"
								/>
							</div>

							<div className="form-check">
								<input className="form-check-input" />
								<label className="form-check-label"></label>
								<a href="/">¿Olvidaste tu contraseña?</a>
							</div>
							<div className=" btn btn-primary form-control">
								Entrar
							</div>
							<div className=" btn btn-info form-control">
								Ingresar con facebbok
							</div>
						</form>
						<hr />
						<div className=""></div>
					</div>

					<div className="col-md-5  card">
						<h4>NUEVOS CLIENTES</h4>
						<hr className="" />

						<form onSubmit={this.handleSubmit}>
							<p className="">
								Bienvenido a Dafiti Colombia. Registrate y sé
								parte de nuestra tienda de moda online.
							</p>
							<p className="">*Compos obligatorios</p>
							<div className="">
								<label>E-mail *</label>
								<input className="form-control" type="text" />
							</div>
							<div className="">
								<label>Confirmar contraseña * </label>
								<input
									// onChange={this.props.onChange}
									className="form-control"
									type="text"
									// name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>
							<div className="">
								<label>Nombre * </label>
								<input
									// onChange={this.props.onChange}
									className="form-control"
									type="text"

									// value={this.props.formValues.firstName}
								/>
							</div>
							<div className="">
								<label>Apellidos * </label>
								<input
									// onChange={this.props.onChange}
									className="form-control"
									type="text"
									// name="firstName"
									// value={this.props.formValues.firstName}
								/>
							</div>

							<div className="">
								<label>Documento * </label>
								<input
									// onChange={this.props.onChange}
									className="form"
									type="text"
									// name="firstName"
									// value={this.props.formValues.firstName}
								/>

								<label className="form-label mt-3">Tipo</label>
								<select className="form-select " required>
									<option selected disabled value="">
										CC
									</option>
									<option>Ce</option>
									<option>Pasaporte</option>
								</select>
								<div className="invalid-feedback">
									Please select a valid state.
								</div>
							</div>
							<div className="">
								<label>Fecha nacimiento * </label>
								<input
									// onChange={this.props.onChange}
									className=""
									type="text"
									// name="firstName"
									// value={this.props.formValues.firstName}
								/>
								<input
									// onChange={this.props.onChange}
									className=""
									type="text"
									// name="firstName"
									// value={this.props.formValues.firstName}
								/>
								<select className=" ">
									<option selected disabled value=""></option>
									<option>1985</option>
									<option>1986</option>
									<option>1987</option>
								</select>
							</div>
							<div className="text-center ">
								<label>Sexo * </label>
								<select className=" ">
									<option>seleccion</option>
									<option>Femenino</option>
									<option>Masculino</option>
								</select>
							</div>

							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="invalidCheck"
									required
								/>
								<label className="form-check-label">
									Acepto política y tratamiento de mis datos *
								</label>
							</div>

							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="invalidCheck"
									required
								/>
								<label className="form-check-label">
									Deseo recibir ofertas por e-mail
								</label>
							</div>

							<div className="col-12">
								<button
									className="btn btn-info form-control"
									type="submit"
								>
									Eviar
								</button>
							</div>
						</form>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default ContForm;
