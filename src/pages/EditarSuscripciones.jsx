import { useEffect, useState } from "react";
import { alertaRedireccion, alertaGeneral } from "../helpers/funciones";
import { useNavigate, useParams } from "react-router-dom";

let suscripcionesAPI = "https://api-prueba-uno.onrender.com/suscripciones"

function EditarSuscripciones() {
    const [servicio, setServicio] = useState("")
    const [costo, setCosto] = useState("")
    const [moneda, setMoneda] = useState("")
    const [inicio, setInicio] = useState("")
    const [renovacion, setRenovacion] = useState("")

    let redireccion = useNavigate()

    let { id } = useParams()

    function getSuscripcionId() {
        fetch(suscripcionesAPI + "/" + id)
            .then((response) => response.json())
            .then((data) => {
                setServicio(data.servicio);
                setCosto(data.costo);
                setMoneda(data.moneda);
                setInicio(data.inicio);
                setRenovacion(data.renovacion);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getSuscripcionId();
    }, []);

    function EditarSuscripciones(e) {
        e.preventDefault();

        let suscripcionEditada = {
            servicio,
            costo,
            moneda,
            inicio,
            renovacion
        };

        fetch(`${suscripcionesAPI}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(suscripcionEditada)
        })
            .then(() =>
                alertaRedireccion(
                    redireccion,
                    "Registro editado correctamente",
                    "/home/suscripciones"
                )
            )
            .catch(() => alertaGeneral("error", "No se pudo editar", "error"));
    }


    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white w-full max-w-lg p-10 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Editar Suscripción</h2>
                </div>
                <form>
                    <input type="hidden" name="_redirect" value="https://jamstacker.studio/thankyou" />

                    <div className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Servicio</label>
                            <input
                                onChange={(e) => setServicio(e.target.value)}
                                value={servicio}
                                type="text"
                                placeholder="Netflix, Spotify, etc."
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Costo</label>
                            <input
                                onChange={(e) => setCosto(e.target.value)}
                                value={costo}
                                type="number"
                                step="0.01"
                                placeholder="Ej: 29.99"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Moneda</label>
                            <input
                                onChange={(e) => setMoneda(e.target.value)}
                                value={moneda}
                                type="text"
                                placeholder="Ej: USD, COP, EUR"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Fecha de inicio</label>
                            <input
                                onChange={(e) => setInicio(e.target.value)}
                                value={inicio}
                                type="date"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Fecha de renovación</label>
                            <input
                                onChange={(e) => setRenovacion(e.target.value)}
                                value={renovacion}
                                type="date"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={EditarSuscripciones}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditarSuscripciones