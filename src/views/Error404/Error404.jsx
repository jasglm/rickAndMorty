import React from "react";
import style from "./Error404.module.css";
import img404 from "../../img/404error+message.jpg";
import { NavLink } from "react-router-dom";

export default function Error404() {
    return (
        <div className={style.body}>
            <img src={img404} alt="img404" />
            <NavLink to="/home">
                <button className={style.getHomeButton}>
                    Get me back home!!!
                </button>
            </NavLink>
        </div>
    );
}
