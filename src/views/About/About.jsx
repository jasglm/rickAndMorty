import React from "react";
import style from "./About.module.css";
import Jas from "../../img/Jas.jpg";
import icon from "../../icons/rocket-solid.svg";
import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className={style.aboutContainer}>
            <div className={style.bodyContainer}>
                <div className={style.headerContainer}>
                    <div className={style.buttonContainer}>
                        <NavLink to="/home">
                            <button className={style.buttonHome}>
                                <img
                                    className={style.buttonHomeImg}
                                    src={icon}
                                    alt="icon"
                                />
                            </button>
                        </NavLink>
                        <h3 className={style.textoBack}>
                            Back to the proyect!!
                        </h3>
                    </div>
                    <div className={style.imageContainer}>
                        <img className={style.foto} src={Jas} alt="Jas" />
                    </div>
                    <div className={style.textContainer}>
                        <h1>Jaasiel Gerardo López Mojica</h1>
                        <h2>FullStack Developer en curso</h2>
                    </div>
                </div>
                <div className={style.contentContainer}>
                    <p>
                        ¡Hola! Soy Jaasiel Gerardo López Mojica, un apasionado
                        desarrollador Fullstack con 35 años de edad. Actualmente
                        estoy cursando{" "}
                        <strong>
                            el bootcamp de Fullstack Developer en Soy Henry
                        </strong>
                        , donde estoy adquiriendo conocimientos sólidos y
                        completos para convertirme en un profesional versátil y
                        competente.
                    </p>
                    <p>
                        Mi viaje en el campo de la informática comenzó con el
                        curso "Introducción al desarrollo web" en Google
                        Activate, donde adquirí los fundamentos del desarrollo
                        web. Además, he ampliado mis habilidades a través de
                        diversos cursos en plataformas como Platzi, donde he
                        obtenido experiencia en temas clave:
                    </p>
                    <ul>
                        <li>Curso Profesional de Git y GitHub</li>
                        <li>Curso de Introducción a C</li>
                        <li>Curso Básico de Algoritmos y Pensamiento Lógico</li>
                        <li>Curso de Programación Básica</li>
                        <li>Curso de Programación Estructurada</li>
                    </ul>
                    <p>
                        Estos cursos me han brindado una base sólida en la
                        resolución de problemas, estructuras de datos,
                        programación orientada a objetos y control de versiones,
                        habilidades que considero esenciales en mi carrera como
                        desarrollador Fullstack.
                    </p>
                    <p>
                        Soy un apasionado del aprendizaje continuo y la
                        resolución de problemas complejos. Disfruto colaborando
                        en equipo y creando soluciones innovadoras para los
                        desafíos tecnológicos. Creo en la importancia de la
                        comunicación efectiva y la colaboración para lograr
                        resultados sobresalientes.
                    </p>
                </div>
            </div>
        </div>
    );
}
