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
        <div >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Suscripciones</h2>
                <Link to="/home/agregar" className="bg-green-600 text-white px-4 py-2 rounded-xl">
                    + Nueva Suscripción
                </Link>
            </div>
            <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center px-4 py-8">
                <div className={`grid gap-8 justify-items-center ${suscripcionesFiltradas.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {suscripcionesFiltradas.map((item) => (
                        <div key={item.id} className="flex flex-col bg-white rounded-3xl w-full max-w-xs shadow-lg">
                            <div className="px-6 py-8 sm:p-10 sm:pb-6">
                                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                                    <div>
                                        <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                                            {item.servicio}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-500">{usuarioLogueado.nombre}</p>
                                        <p className="mt-2 text-sm text-gray-500">
                                            {item.fechaInicio} hasta {item.fechaRenovacion}
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p>
                                            <span className="text-5xl font-light tracking-tight text-black">{item.costo}</span>
                                            <span className="text-base font-medium text-gray-500"> /{item.moneda}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex px-6 pb-8 sm:px-8 gap-2">
                                <Link
                                    className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-sm"
                                    to={"/home/editar/" + item.id}
                                >
                                    Editar
                                </Link>
                                <button
                                    onClick={() => eliminarSuscripcion(item.id)}
                                    className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-sm"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    )
}

export default GestionSuscripciones