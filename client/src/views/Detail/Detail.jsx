import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import videoDetail from "../../videos/rym4.mp4";

export default function Detail() {
	const { id } = useParams();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				setCharacter(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<div className={style.body}>
			<div className={style.videoContainer}>
				<video className={style.video} autoPlay loop muted>
					<source src={videoDetail} type="video/mp4" />
				</video>
			</div>

			<div className={style.contentContainer}>
				<div className={style.leftContainer}>
					<img
						className={style.image}
						src={character.image}
						alt={character.name}
					/>
				</div>

				<div className={style.rightContainer}>
					<div className={style.textContainer}>
						<h2>{character.name}</h2>
						<h2>ID | {id}</h2>
						<h2>STATUS | {character.status}</h2>
						<h2>GENDER | {character.gender}</h2>
						<h2>SPECIES | {character.species}</h2>
						{character.origin && (
							<h2>ORIGIN | {character.origin.name}</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
