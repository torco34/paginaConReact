import React, {Component} from 'react';
import Buscador from '../components/Buscador';
// import  '../assets/styles/components/Header.scss';
// import '../assets/styles/components/Header';

class Header extends Component {
	
	render() {
		return(
			<div className="container">
             <div className="jumbotron">
             <p className="load text-center">Buscador de Imagenes</p>
             < Buscador />
             </div>

			</div>

          
			);
	}
}

	

export default Header