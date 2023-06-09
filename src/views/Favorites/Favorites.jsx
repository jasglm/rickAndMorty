import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { NavLink } from "react-router-dom";
import style from "./Favorites.module.css";
import { orderCards, filterCards, showAllCards } from "../../redux/actions";

function Favorites(props) {
	const dispatch = useDispatch();
	const { favorites } = props;
	const [aux, setAux] = useState(false);

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
		setAux(!aux);
	};
	const handleShowAll = () => {
		dispatch(showAllCards());
	};

	const handleFilter = (e) => {
		const selectedFilter = e.target.value;
		if (selectedFilter === "All") {
			handleShowAll();
		} else {
			dispatch(filterCards(selectedFilter));
		}
	};

	return (
		<div>
			<NavLink to="/home">
				<button className={style.homeButton}>HOME</button>
			</NavLink>
			<NavLink to="/about">
				<button className={style.homeButton}>ABOUT</button>
			</NavLink>
			<label htmlFor=""> Ordenar por id: </label>
			<select onChange={handleOrder}>
				<option value="A">Ascendente</option>
				<option value="D">Descendente</option>
			</select>
			<label htmlFor=""> Filtrar: </label>
			<select onChange={handleFilter}>
				<option value="ALL">Todos</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">unknown</option>
			</select>

			<Cards characters={favorites} isFavoriteView={true} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		favorites: state.myFavorites,
	};
};
export default connect(mapStateToProps, null)(Favorites);
