import { useEffect, useState } from "react";
import useCampers from "../../../hooks/useCampers.jsx";
import CustomBtn from "../../common/ui/CustomBtn/CustomBtn.jsx";
import { Loader } from "../../common/ui/Loader/Loader.jsx";
import CamperCard from "../CamperCard/CamperCard.jsx";
import css from "./CampersList.module.css";

export default function CampersList() {
    const [cardsToShow, setCardsToShow] = useState(4);
    const { campers, loading, error, total } = useCampers();
    const campersToRender = campers.slice(0, cardsToShow);

    useEffect(() => {
        setCardsToShow(4);
    }, [campers]);

    if (loading) return <Loader/>;
    if (error) return <p>Error while loading campers. Please try again later.</p>;
    if (campers.length === 0) return <p className={css.text}>No campers with these parameters</p>;

    const isMore = cardsToShow + 4 < total;

    const handleLoadMoreClock = () => {
        if (!isMore) {
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

            {isMore && <CustomBtn title="Load more" variant="common" onClick={handleLoadMoreClock}/>}
        </div>
    );
}
