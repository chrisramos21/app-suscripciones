import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

function Home(){
    return(
        <div>
            <Menu/>
            <Outlet/>
        </div>
    )
}

export default Home