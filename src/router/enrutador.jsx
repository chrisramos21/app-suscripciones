import Login from '../pages/Login'
import RutaProtegida from '../components/RutaProtegida'
import Home from '../pages/Home'
import GestionSuscripciones from '../pages/GestionSuscripciones'
import EditarSuscripciones from '../pages/EditarSuscripciones'
export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home/',
        element: <RutaProtegida componente = {<Home/>} />,
        children:[
            {
                path:"suscripciones",
                element:<GestionSuscripciones/>
            },
            {
                path:"editar/:id",
                element: <EditarSuscripciones/>
            }
        ]
    }
]