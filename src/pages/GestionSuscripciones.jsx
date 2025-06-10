import { useState, useEffect } from "react"
import { alertaConfirmar } from "../helpers/funciones";
import { Link } from "react-router-dom";

let suscripcionesAPI = "https://api-prueba-uno.onrender.com/suscripciones"
function GestionSuscripciones() {
    const [subs, setSubs] = useState([])
    let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

    function getSubs() {
        fetch(suscripcionesAPI)
            .then((response) => response.json())
            .then((data) => setSubs(data))
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getSubs();
    }, []);

    function filtrarSuscripciones() {
        let suscripcionesFiltradas = subs.filter(
            (item) => item.usuarioId == usuarioLogueado.id
        );
        console.log(suscripcionesFiltradas);
        return suscripcionesFiltradas;
    }

    let suscripcionesFiltradas = filtrarSuscripciones();

    function eliminarSuscripcion(id) {
        alertaConfirmar(id, suscripcionesAPI, getSubs);

    }

    return (
        <>
            {suscripcionesFiltradas.map((item) => (
                <div className="min-h-screen flex items-center justify-center bg-[#e8e8e8] px-4">
                    <div className="flex flex-col bg-white rounded-3xl max-w-xs w-full shadow-lg">
                        <div className="px-6 py-8 sm:p-10 sm:pb-6">
                            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                                <div>
                                    <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                                        {item.servicio}
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500">{usuarioLogueado.nombre}</p>
                                    <p className="mt-2 text-sm text-gray-500">{item.fechaInicio} hasta {item.fechaRenovacion}</p>
                                </div>
                                <div className="mt-6">
                                    <p>
                                        <span className="text-5xl font-light tracking-tight text-black">{item.costo}</span>
                                        <span className="text-base font-medium text-gray-500"> /{item.moneda}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-6 pb-8 sm:px-8">
                            <Link
                                aria-describedby="tier-company"
                                className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                to={"/home/editar/" + item.id}
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => eliminarSuscripcion(item.id)}
                                aria-describedby="tier-company"
                                className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                href="#"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default GestionSuscripciones