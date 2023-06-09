import React, { useState } from "react";
import style from "./Login.module.css";
import logoRM from "../../icons/th.png";
import validar from "../../utils/validacion/validacion";

export default function Login(props) {
    const { onLogin } = props;
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value,
        });

        setErrors(validar({ ...userData, [name]: value }));
    }

    function submitHandler(event) {
        event.preventDefault();
        onLogin(userData);
    }

    return (
        <div className={style.bodyContainer}>
            <form onSubmit={submitHandler} className={style.formContainer}>
                <h3 className={style.ingresaText}>Ingresa a tu cuenta</h3>
                <img className={style.logoRM} src={logoRM} alt="logoRM" />
                <label className={style.labelEmail}>EMAIL</label>
                <input
                    className={style.inputEmail}
                    type="text"
                    placeholder="example@example.com"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <span className={style.emailError}>{errors.email}</span>
                <label className={style.labelPassword}>PASSWORD</label>
                <input
                    className={style.inputPassword}
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <span className={style.passwordError}>{errors.password}</span>
                {(errors.email || errors.password) &&
                !(userData.email === "" && userData.password === "") ? null : (
                    <button className={style.ingresarButton} type="submit">
                        INGRESAR
                    </button>
                )}
            </form>
        </div>
    );
}
