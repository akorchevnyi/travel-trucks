import css from "./LocationReview.module.css";
import Icon from "../ui/Icon/Icon.jsx";
import clsx from "clsx";

export default function LocationReview({ rating, reviews, location }) {
    return (
        <div className={css.locationReviewWrapper}>
            <p className={css.ratingText}>
                <Icon type="rating" width={16} height={16} styles={reviews ? "rated" : "unrated"}/>
                {rating} ({reviews}{reviews === 1 ? " Review" : " Reviews"}) </p>
            <p className={clsx(css.ratingText, css.locationText)}>
                <Icon type="location" width={16} height={16}/>
                {location}
            </p>
        </div>
    );
}
