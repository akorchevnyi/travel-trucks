import css from "./CamperCard.module.css";
import clsx from "clsx";
import { useState } from "react";
import Icon from "../ui/Icon/Icon.jsx";
import LocationReview from "../LocationReview/LocationReview.jsx";

export default function CamperCard({ camper }) {
    const { price, name, gallery, id, reviews, rating, location } = camper;
    const [favorite, setFavorite] = useState(JSON.parse((localStorage.getItem("favorites")) || []).includes(id));
    console.log("==== camper ==> ", camper);

    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.includes(id) ? favorites.splice(favorites.indexOf(id), 1) : favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setFavorite(!favorite);
    };

    return (
        <div className={css.wrapper}>
            <div className={css.imageWrapper}>
                <img className={css.image} src={gallery[0].thumb} alt={name}/>
            </div>

            <div className={css.info}>
                <div className={css.mainInfo}>
                    <div className={css.headingBlock}>
                        <h2 className={css.heading}>{name}</h2>
                        <h2 className={css.heading}>
                            €{price}{price === Math.floor(price) && ".00"}
                            <Icon type="heart" width={26} height={24} onClick={handleFavoriteClick}
                                  styles={clsx(css.heart, favorite && css.favorite)}/>
                        </h2>
                    </div>
                    <LocationReview reviews={reviews?.length || 0} rating={rating} location={location}/>

                </div>

            </div>
        </div>
    );
}
