import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import axios from "axios";
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Error404 from "./views/Error404/Error404.jsx";
import Login from "./views/Login/Login.jsx";
import "./App.css";
import Favorites from "./views/Favorites/Favorites.jsx";

function App() {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	//! 		-->***Manejo de login en FRONTEND***<--
	// const EMAIL = "jas@prueba.com";
	// const PASSWORD = "12345678";

	//! 		-->***Manejo de login en FRONTEND***<--
	// function handleLogin(userData) {
	// 	if (userData.password === PASSWORD && userData.email === EMAIL) {
	// 		setAccess(true);
	// 		navigate("/home");
	// 	} else {
	// 		window.alert("Credenciales invalidas");
	// 	}
	// }

	function handleLogin(userData) {
		const { email, password } = userData;
		const URL = "http://localhost:3001/rickandmorty/login/";
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			const { access } = data;
			if (access === true) {
				setAccess(access);
				navigate("/home");
			} else window.alert("Credenciales invalidas");
		});
	}

	useEffect(() => {
		!access && navigate("/");
	}, [access, navigate]);

	function handleLogout() {
		setAccess(false);
		navigate("/");
		window.alert("Espero verte pronto!!");
	}

	function isDuplicate(id) {
		const parsedId = parseInt(id);
		return characters.some((character) => character.id === parsedId);
	}

	function onSearch(id) {
		if (isDuplicate(id) === true)
			return window.alert("El personaje ya se encuentra en la cardlist");
		else {
			axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
				({ data }) => {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert("¡No hay personajes con este ID!");
					}
				}
			);
		}
	}

	function onClose(id) {
		const parsedId = parseInt(id);
		const filteredCharacters = characters.filter(
			(character) => character.id !== parsedId
		);
		setCharacters(filteredCharacters);
	}

	return (
		<div>
			<NavBar
				onSearch={onSearch}
				onLogout={handleLogout}
				isDuplicate={isDuplicate}
			/>
			<Routes>
				<Route path="/" element={<Login onLogin={handleLogin} />} />
				<Route
					path="/home"
					element={<Home characters={characters} onClose={onClose} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
