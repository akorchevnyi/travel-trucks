import { useState } from "react";
import useCampers from "../../hooks/useCampers.js";
import CustomBtn from "../ui/CustomBtn/CustomBtn.jsx";
import { Loader } from "../ui/Loader/Loader.jsx";
import CamperCard from "../CamperCard/CamperCard.jsx";
import css from "./CampersList.module.css";

export default function CampersList() {
    const [cardsToShow, setCardsToShow] = useState(4);
    const { campers, loading, error, total } = useCampers();
    const campersToRender = campers.slice(0, cardsToShow);

    if (loading) return <Loader />;
    if (error) return <p>Error while loading campers. Please try again later.</p>;

    const handleLoadMoreClock = () => {
        if (cardsToShow + 4 >= total) {
            setCardsToShow(total);
            return;
        }

        setCardsToShow(cardsToShow + 4);
    };


    return (
        <div className={css.wrapper}>
            <ul className={css.list}>
                {campersToRender.map(camper =>
                    <li key={camper.id}>
                        <CamperCard camper={camper}/>
                    </li>
                )}
            </ul>
            <CustomBtn title="Load more" type="common" onClick={handleLoadMoreClock}/>
        </div>
    );
}
