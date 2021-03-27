import React, { useState, Fragment } from "react";

const EstHooks = () => {
	const [numero, setNumero] = useState(0);

	const aumentar = () => {
		console.log("hola mi amor");
		setNumero(numero + 1);
	};
	return (
		<Fragment>
			<h3 className="">este es mi contador {numero}</h3>
			<button onClick={aumentar} className="btn btn-info">
				Sumar{" "}
			</button>
		</Fragment>
	);
};
export default EstHooks;
