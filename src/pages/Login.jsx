import { useState, useEffect } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { alertaRedireccion, alertaGeneral, generarToken } from "../helpers/funciones"

const usuarioAPI = "https://api-prueba-uno.onrender.com/usuarios"
function Login() {
    const [getName, setName] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getEmail, setEmail] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    let redireccion = useNavigate()
    function getUsuarios() {
        fetch(usuarioAPI)
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUsuarios();
    }, []);


    function buscarUsuario() {
        let usuarioEncontrado = usuarios.find(
            (item) => getName == item.nombre && getPassword == item.password
        );
        return usuarioEncontrado;
    }
    function iniciarSesion() {
        if (buscarUsuario()) {
            let token = generarToken();
            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
            alertaRedireccion(redireccion, "Bienvenido al sistema", "/home");
        } else {
            alertaGeneral("Error", "Error de credenciales", "Error");
        }
    }
    function registrarUsuario() {
        let auth = usuarios.some(
            (item) => item.correo == getEmail || item.nombre == getName
        );
        if (auth) {
            alertaGeneral("Error", "Usuario ya existe en la base de datos", "Error");
        } else {
            let usuario = {
                nombre: getName,
                correo: getEmail,
                password: getPassword,
            };
            fetch(usuarioAPI, {
                method: "POST",
                body: JSON.stringify(usuario),
            }).then(() => {
                getUsuarios();
                alertaGeneral("Registros exitoso", "Ya puede ir a Login e ingresar sus credenciales", "info")
            });
        }
    }

    return (
        <div className="centered-container">
            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input type="checkbox" className="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className="flip-card__inner">
                            <div className="flip-card__front">
                                <div className="title">Log in</div>
                                <form className="flip-card__form" action="">
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        className="flip-card__input"
                                        name="Name"
                                        placeholder="Name"
                                        type="text"
                                    />
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="flip-card__input"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                    />
                                    <button type="button" onClick={iniciarSesion} className="flip-card__btn">Let's go!</button>
                                </form>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <form className="flip-card__form" action="">
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        className="flip-card__input"
                                        placeholder="Name"
                                        type="text"
                                    />
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flip-card__input"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                    />
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="flip-card__input"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                    />
                                    <button type="button" onClick={registrarUsuario} className="flip-card__btn">Confirm!</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>

    );
}

export default Login;