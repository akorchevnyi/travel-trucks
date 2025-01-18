import css from "./CamperCard.module.css";
import clsx from "clsx";
import Icon from "../../common/ui/Icon/Icon.jsx";
import LocationReview from "../../common/LocationReview/LocationReview.jsx";
import Categories from "../../common/Categories/Categories.jsx";
import CustomBtn from "../../common/ui/CustomBtn/CustomBtn.jsx";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, changeFavorites } from "../../../redux/campersSlice.js";


export default function CamperCard({ camper }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { price, name, gallery, id, reviews, rating, location, description } = camper;
    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites.includes(id);


    const handleFavoriteClick = () => {
       dispatch(changeFavorites(id))
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
                                  styles={clsx(css.heart, isFavorite && css.favorite)}/>
                        </h2>
                    </div>
                    <LocationReview reviews={reviews?.length || 0} rating={rating} location={location}/>
                </div>

                <p className={css.description}>{description}</p>

                <Categories camper={camper}/>

                <CustomBtn title="Show more" variant="accent" onClick={handleShowMore} />
            </div>
        </div>
    );
}
