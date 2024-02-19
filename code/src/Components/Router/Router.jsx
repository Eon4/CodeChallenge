import style from "./Router.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Error } from "../../pages/Error";

//Tager imod et array af routes og mapper den
export const Router = ({ routes }) => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout routes={routes} />}>
                        {
                            routes?.map((route, index) => {
                                return (
                                    <Route key={index} path={route.path} element={route.element} />
                                )
                            })
                        }
                        <Route path='/*' element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}