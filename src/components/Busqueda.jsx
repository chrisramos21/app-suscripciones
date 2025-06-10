function Busqueda({ busqueda, setBusqueda }) {
    function handleChange(e) {
        setBusqueda(e.target.value);
    }

    return (
        <div className="flex justify-center mb-4">
            <div className="flex items-center border w-80 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
                <input
                    onChange={handleChange}
                    value={busqueda}
                    type="text"
                    placeholder="Buscar servicio"
                    className="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                    <path d="M 13 3 C 7.5 3 3 7.5 3 13s4.5 10 10 10 10-4.5 10-10S18.5 3 13 3zM13 5c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm6.3 14.3l5.4 5.4-1.4 1.4-5.4-5.4 1.4-1.4z"/>
                </svg>
            </div>
        </div>
    );
}

export default Busqueda;