import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
	const { characters, onClose, isFavoriteView } = props;

	return (
		<div className={style.CardsContainer}>
			{characters.map((character) => (
				<Card
					key={character.id}
					character={character}
					onClose={onClose}
					isFavoriteView={isFavoriteView}
				/>
			))}
		</div>
	);
}
