import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import microscope from "../../icons/microscope-solid.svg";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

function Card(props) {
	const {
		character,
		onClose,
		addFavorite,
		removeFavorite,
		favorites,
		isFavoriteView,
	} = props;
	const { name, species, gender, image, id } = character;

	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		const isCharacterFav = favorites.some((fav) => fav.id === id);
		setIsFav(isCharacterFav);
	}, [favorites, id]);

	function handleFavorite() {
		if (!isFav) {
			addFavorite(character);
			setIsFav(true);
		} else {
			removeFavorite(id);
			setIsFav(false);
		}
	}

	return (
		<div className={style.CardContainer}>
			{!isFavoriteView && (
				<button
					className={style.CloseButton}
					onClick={() => onClose(character.id)}
				>
					X
				</button>
			)}
			<div className={style.ImageContainer}>
				<img className={style.CharacterImage} src={image} alt={name} />
				<h2 className={style.Name}>{name}</h2>
				<div className={style.Info}>
					<h2>Species: {species}</h2>
					<h2>Gender: {gender}</h2>
				</div>
			</div>
			<div className={style.buttonContainerMic}>
				<NavLink to={`/detail/${id}`}>
					<button className={style.microscopeContainer}>
						<img
							className={style.microscopeButton}
							src={microscope}
							alt="microscope"
						/>
					</button>
				</NavLink>
				{isFav ? (
					<button onClick={handleFavorite}>❤️</button>
				) : (
					<button onClick={handleFavorite}>🤍</button>
				)}
			</div>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (character) => dispatch(addFavorite(character)),
		removeFavorite: (id) => dispatch(removeFavorite(id)),
	};
};

const mapStateToProps = (state) => {
	return {
		favorites: state.myFavorites,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
