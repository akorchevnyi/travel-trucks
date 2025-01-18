import css from "./CamperReviews.module.css";
import Review from "../Review/Review.jsx";
import useCamper from "../../../hooks/useCamper.jsx";
import { Loader } from "../../common/ui/Loader/Loader.jsx";
import iziToast from "izitoast";
import ErrorMessage from "../../common/Error/ErrorMessage.jsx";

export default function CamperReviews() {
    const { camper, loading, error } = useCamper();
    if (loading) return <Loader/>;
    if (error) {
        iziToast.error({
            title   : "Error",
            message : "Error while loading camper. Please try again later.",
            position: "topRight"
        });
        return <ErrorMessage error="Error while loading camper. Please try again later."/>;
    }
    if (!camper) return <p>Camper not found</p>;

    const { reviews } = camper;
    if (!reviews) return <p>No reviews yet</p>;

    return (
        <ul className={css.wrapper}>
            {reviews.map((review, index) => (
                <li key={index}>
                    <Review review={review}/>
                </li>
            ))}
        </ul>
    );
};
