import css from "./Review.module.css";
import Icon from "../../common/ui/Icon/Icon.jsx";

export default function Review({ review: { comment, reviewer_name: name, reviewer_rating: rating } }) {

    return (
        <div className={css.wrapper}>
            <div className={css.head}>

                <div className={css.avatar}>{name.slice(0, 1).toUpperCase()}</div>

                <div className={css.nameRatingWrapper}>
                    <p className={css.name}>{name}</p>
                    <div className={css.ratingWrapper}>
                        {Array(5).fill('').map((_, index) => (
                            <Icon key={index} type="rating" width={16} height={16} styles={index >= rating ? "unrated" : "rated"}/>
                        ))
                       }
                    </div>
                </div>
            </div>

            <p className={css.comment}>{comment}</p>
        </div>
    );
}
