import css from "./CamperFeatures.module.css";
import Categories from "../../common/Categories/Categories.jsx";
import useCamper from "../../../hooks/useCamper.jsx";
import { Loader } from "../../common/ui/Loader/Loader.jsx";
import ErrorMessage from "../../common/Error/ErrorMessage.jsx";


export default function CamperFeatures() {
    const { camper, loading, error } = useCamper();
    if (loading) return <Loader/>;
    if (error) return <ErrorMessage error="ErrorMessage while loading camper. Please try again later."/>;
    if (!camper) return <p>Camper not found</p>;

    const { form, length, width, height, tank, consumption } = camper;

    return (
        <div className={css.wrapper}>
            <Categories camper={camper}/>

            <div className={css.detailsWrapper}>
                <h3 className={css.header}>Vehicle details</h3>

                <div className={css.line}/>

                <ul className={css.list}>
                    <li className={css.item}>
                        <p className={css.text}>Form</p>
                        <p className={css.text}>{capitalize(form)}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Length</p>
                        <p className={css.text}>{addSpace(length)}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Width</p>
                        <p className={css.text}>{addSpace(width)}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Height</p>
                        <p className={css.text}>{addSpace(height)}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Tank</p>
                        <p className={css.text}>{addSpace(tank)}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Consumption</p>
                        <p className={css.text}>{consumption}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function addSpace(word) {
    return word.replace(/(\d)([a-zA-Z])/g, "$1 $2");
}
