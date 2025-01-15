import SideBlock from "../../components/SideBlock/SideBlock.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import clsx from "clsx";
import css from "./CampersPage.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOperations.js";


export default function CampersPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <div className={clsx(css.wrapper, "container")}>
            <SideBlock/>
            <CampersList/>
        </div>
    );
}
