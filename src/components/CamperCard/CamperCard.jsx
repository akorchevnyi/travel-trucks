import css from "./CamperCard.module.css";
import clsx from "clsx";
import { useState } from "react";
import Icon from "../common/ui/Icon/Icon.jsx";
import LocationReview from "../common/LocationReview/LocationReview.jsx";
import Categories from "../common/Categories/Categories.jsx";
import CustomBtn from "../common/ui/CustomBtn/CustomBtn.jsx";
import { useNavigate } from "react-router";

export default function CamperCard({ camper }) {
    const navigate = useNavigate();
    const { price, name, gallery, id, reviews, rating, location, description } = camper;
    const [favorite, setFavorite] = useState(JSON.parse((localStorage.getItem("favorites")) || []).includes(id));
    // console.log("==== camper ==> ", camper);

    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.includes(id) ? favorites.splice(favorites.indexOf(id), 1) : favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setFavorite(!favorite);
    };

    const handleShowMore = () => {
        navigate(`/campers/${id}`, { state: "/campers" })
    }

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

                <p className={css.description}>{description}</p>

                <Categories camper={camper}/>

                <CustomBtn title="Show more" type="accent" onClick={handleShowMore} />
            </div>
        </div>
    );
}
