import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar"
import { Breadcrumbs } from "../Components/Breadcrumbs/Breadcrumbs";

export const Layout = () => {

    return (
        <>
            <Navbar />
            <Breadcrumbs />
            <Outlet />
        </>
    )
}