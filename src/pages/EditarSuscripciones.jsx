import { useEffect, useState } from "react";
import { alertaRedireccion, alertaGeneral } from "../helpers/funciones";
import { useNavigate, useParams } from "react-router-dom";

let suscripcionesAPI = "https://api-prueba-uno.onrender.com/suscripciones"

function EditarSuscripciones() {



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
                                type="text"
                                placeholder="Netflix, Spotify, etc."
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Costo</label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="Ej: 29.99"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Moneda</label>
                            <input
                                type="text"
                                placeholder="Ej: USD, COP, EUR"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Fecha de inicio</label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Fecha de renovación</label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition duration-200"
                            >
                                Guardar cambios
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditarSuscripciones