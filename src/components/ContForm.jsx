import React, { useState } from "react";
import "../assets/styles/components/ForCliente.scss";
class ContForm extends React.Component {
	render() {
		return (
			<div className="container_formulario container">
				<div className="row">
					<div className="col-md-6 ">
						<h4>CLIENTES REGISTRADOS</h4>
						<hr />
						<form className="">
							<div className="form-group email ">
								<p>Campo Obligatorio *</p>
								<br />
								<label>E.mail *</label>
								<input className="form-control" type="text" />
							</div>

							<div className="form-group">
								<label>Contraseña *</label>
								<input
									className="form-control "
									type="text"
									name="firstName"
								/>
							</div>
							<div>
								<button className="btn botones form-control">
									Entrar
								</button>
							</div>
							<div className="mt-3">
								<button className="btn btn-info form-control">
									ingresar con facebook
								</button>
							</div>
						</form>
					</div>
					<div className="col-md-6 lineaVertical">
						<h4>NUEVOS CLIENTES</h4>
						<hr className="" />

						<form>
							<p className="vertical-line">
								Bienvenido a Dafiti Colombia. Registrate y sé
								parte de nuestra tienda de moda online.
							</p>
							<br />
							<p className="">*Compos obligatorios</p>
							<div>
								<label>E-mail *</label>
								<input className="form-control" type="text" />
							</div>
							<div className="">
								<label>Confirmar contraseña * </label>
								<input className="form-control" type="text" />
							</div>
							<div className="">
								<label>Nombre * </label>
								<input className="form-control" type="text" />
							</div>
							<div className="">
								<label>Apellidos * </label>
								<input className="form-control" type="text" />
							</div>

							<div>
								<label>Documento * </label>
								<input type="text" />

								<label className=" mt-3">Tipo</label>
								<select>
									<option>CC</option>
									<option>Ce</option>
									<option>Pasaporte</option>
								</select>
							</div>

							<div className="form-check mt-3">
								<input
									className="form-check-input"
									type="checkbox"
								/>
								<label>
									Acepto política y tratamiento de mis datos *
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
								/>
								<label>Deseo recibir ofertas por e-mail</label>
							</div>

							<button
								className="btn botones form-control mt-3"
								type="submit"
							>
								Eviar
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContForm;
