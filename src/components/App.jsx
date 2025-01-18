import "./App.css";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import useCampers from "../hooks/useCampers.jsx";
import { Loader } from "./common/ui/Loader/Loader.jsx";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));
const Navigation = lazy(() => import("./Navigation/Navigation.jsx"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CampersPage = lazy(() => import("../pages/CampersPage/CampersPage.jsx"));
const CamperDetailsPage = lazy(() => import("../pages/CamperDetailsPage/CamperDetailsPage.jsx"));
const CamperFeatures = lazy(() => import("./camper-details/CamperFeatures/CamperFeatures.jsx"));
const CamperReviews = lazy(() => import("./camper-details/CamperReviews/CamperReviews.jsx"));


export default function App() {
    const { error } = useCampers();
    if (error) return <p>Error while loading campers. Please try again later.</p>;

    return (
        <Suspense fallback={<Loader/>}>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/campers" element={<CampersPage/>}/>
                <Route path="/campers/:id" element={<CamperDetailsPage/>}>
                    <Route index element={<CamperFeatures/>}/>
                    <Route path="features" element={<CamperFeatures/>}/>
                    <Route path="reviews" element={<CamperReviews/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
    );
}
