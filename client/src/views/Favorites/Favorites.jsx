import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { NavLink } from "react-router-dom";
import style from "./Favorites.module.css";
import { orderCards, filterCards, showAllCards } from "../../redux/actions";
import homeButton from "../../icons/rocket-solid.svg";
import videoFavorites from "../../videos/rym3.mp4";

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
			<div className={style.videoContainer}>
				<video className={style.video} autoPlay loop muted>
					<source src={videoFavorites} type="video/mp4" />
				</video>
			</div>
			<div className={style.favoritesNavBarContainer}>
				<NavLink to="/home">
					<button className={style.homeButtonContainer}>
						HOME
						<img
							className={style.homeButton}
							src={homeButton}
							alt="homeButton"
						/>
					</button>
				</NavLink>
				<NavLink to="/about">
					<button className={style.aboutButton}>About</button>
				</NavLink>
				<label className={style.ordenar}> Ordenar por id: </label>
				<select onChange={handleOrder}>
					<option value="A">Ascendente</option>
					<option value="D">Descendente</option>
				</select>
				<label className={style.filtrar}> Filtrar: </label>
				<select onChange={handleFilter}>
					<option value="ALL">Todos</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">unknown</option>
				</select>
			</div>
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
