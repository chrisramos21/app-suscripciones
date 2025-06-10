import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../helpers/funciones";

const suscripcionesAPI = "https://api-prueba-uno.onrender.com/suscripciones";

function AgregarSuscripciones() {
    const [servicio, setServicio] = useState("");
    const [costo, setCosto] = useState("");
    const [moneda, setMoneda] = useState("");
    const [inicio, setInicio] = useState("");
    const [renovacion, setRenovacion] = useState("");
    const redireccion = useNavigate();

    function agregarSubs(e) {
        e.preventDefault();
        const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

        const nueva = {
            servicio,
            costo,
            moneda,
            fechaInicio: inicio,
            fechaRenovacion: renovacion,
            usuarioId: usuarioLogueado.id   
        };

        fetch(suscripcionesAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nueva)
        })
            .then(() => 
                alertaRedireccion(
                    redireccion,
                    "Suscripción agregada",
                    "/home/suscripciones"
                )
            )
            .catch(() => alertaGeneral("error", "No se pudo editar", "error"));
    }

    return (
        <section className="min-h-screen flex items-center justify-center">
            <form onSubmit={agregarSubs} className="bg-white shadow-md p-8 rounded-xl space-y-4 w-full max-w-md">
                <h2 className="text-xl font-bold text-center">Agregar Suscripción</h2>
                <input
                    type="text"
                    placeholder="Servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl"
                    required
                />
                <input
                    type="number"
                    placeholder="Costo"
                    value={costo}
                    onChange={(e) => setCosto(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl"
                    required
                />
                <input
                    type="text"
                    placeholder="Moneda"
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl"
                />
                <input
                    type="date"
                    value={inicio}
                    onChange={(e) => setInicio(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl"
                />
                <input
                    type="date"
                    value={renovacion}
                    onChange={(e) => setRenovacion(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full">
                    Guardar
                </button>
            </form>
        </section>
    );
}

export default AgregarSuscripciones;