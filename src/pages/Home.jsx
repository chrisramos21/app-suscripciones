import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

function Home(){
    return(
        <div>
            <Menu/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Home