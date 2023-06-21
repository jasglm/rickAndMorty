import React from "react";
import Cards from "../../components/Cards/Cards";
import videoRM from "../../videos/rym2.mp4";
import style from "./Home.module.css";

export default function Home(props) {
	const { characters, onClose } = props;

	return (
		<div>
			<video className={style.BackgroundVideo} autoPlay loop muted>
				<source src={videoRM} type="video/mp4" />
			</video>
			<Cards characters={characters} onClose={onClose} />
		</div>
	);
}
