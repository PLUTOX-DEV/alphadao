import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/footer"

const AppLayout = () => {


    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default AppLayout
