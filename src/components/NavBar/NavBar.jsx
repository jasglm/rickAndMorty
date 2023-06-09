import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import logoRm from "../../icons/th.png";
import homeButton from "../../icons/rocket-solid.svg";
import logOutIcon from "../../icons/power-off-solid.svg";
export default function NavBar(props) {
	const { onSearch, onLogout, isDuplicate } = props;
	const location = useLocation();
	const hiddenNavBarPath = "/";
	const hiddenNavBarPath2 = "/about";
	const hiddenNavBarPath3 = "/favorites";

	if (
		location.pathname === hiddenNavBarPath ||
		location.pathname === hiddenNavBarPath2 ||
		location.pathname === hiddenNavBarPath3
	) {
		return null;
	}
	return (
		<div className={style.NavBarContainer}>
			<div className={style.leftSide}>
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
				<NavLink to="/favorites">
					<button className={style.favoritesButton}>Fav</button>
				</NavLink>
			</div>

			<div className={style.rightSide}>
				<div className={style.titleContainer}>
					<h1 className={style.Title}>Rick & Morty</h1>
				</div>
				<div className={style.LogoContainer}>
					<img className={style.Logo} src={logoRm} alt="Logo" />
				</div>
				<SearchBar onSearch={onSearch} isDuplicate={isDuplicate} />
				<button className={style.logOutButton} onClick={onLogout}>
					<img
						className={style.logOutIcon}
						src={logOutIcon}
						alt="logOutIcon"
					/>
				</button>
			</div>
		</div>
	);
}
