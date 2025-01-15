import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomaPage/HomePage.jsx";
import { lazy } from "react";
import CampersPage from "../pages/CampersPage/CampersPage.jsx";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));
const Navigation = lazy(() => import("./Navigation/Navigation.jsx"));


export default function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/campers" element={<CampersPage />}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}
