import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
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
            <div className={style.buttonContainer}>
                <NavLink to="/home">
                    <button className={style.homeButton}>BACK</button>
                </NavLink>
                <NavLink to="/about">
                    <button className={style.aboutButton}>ABOUT</button>
                </NavLink>
            </div>
        </div>
    );
}
