
import { Navbar } from "./Components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'

export const MainLayout = ()=>{

    return(
        <>
        <Navbar />
        <Outlet />

        </>
    )
}