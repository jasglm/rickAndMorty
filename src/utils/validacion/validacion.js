const validar = (userData) => {
    let errors = {};
    if (!userData.email) {
        errors.email = "Email requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        errors.email = "Formato inválido";
    } else if (userData.email.length > 35) {
        errors.email = "Email demasiado largo";
    }

    if (!userData.password) {
        errors.password = "Contraseña requerida";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    } else if (!/\d/.test(userData.password)) {
        errors.password = "La contraseña debe contener al menos un número";
    }
    return errors;
};

export default validar;
