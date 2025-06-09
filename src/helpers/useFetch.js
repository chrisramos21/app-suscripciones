import { useState,useEffect } from "react";
export function useFetch(url) {
    const [data, setData] = useState(null);

    function getUsuarios() {
            setLoading(true)
            fetch(url)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error));        
        }
    
    useEffect(() =>{
            getUsuarios()
    
    },[])
    
    return {data}
}