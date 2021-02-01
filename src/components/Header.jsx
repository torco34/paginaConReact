import React from 'react';
// import '../assets/styles/App.scss';
const Header = () => ( 
	<header id="foto_header" className=" container header">
		<nav id="header" className="nav">
			<ul className="active" id="">
				<li className="active" id="inicio" data-body="#taps1">Inicio</li>
				<li id="menu" data-body="#taps2">Pizza</li>
				<li id="sabor" data-body="#taps3">Adicionales</li>
				<li id="ingresar" data-body="#taps4">Bebidas</li>
			</ul>
		</nav>
	</header>
);

export default Header