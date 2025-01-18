import css from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeEquipment, changeFavorite, changeType, selectEquipment, selectFavorite, selectType } from "../../../redux/filtersSlice.js";
import clsx from "clsx";
import Icon from "../../common/ui/Icon/Icon.jsx";

const checkBoxData = ["AC", "automatic", "kitchen", "TV", "bathroom"];
const radioData = ["panelTruck", "fullyIntegrated", "alcove"];

export default function Filters() {
    const dispatch = useDispatch();
    const eqFilters = useSelector(selectEquipment);
    const typeFilter = useSelector(selectType);
    const isFavorite = useSelector(selectFavorite);

    const handleEqFilterChange = (id) => {
        dispatch(changeEquipment({ ...eqFilters, [id]: !eqFilters[id] }));
    };

    const handleTypeFilterChange = (id) => {
        dispatch(changeType(typeFilter === id ? "" : id));
    };

    const handleFavoriteFilterChange = () => {
        dispatch(changeFavorite(!isFavorite));
    };

    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Filters</h3>

            <div>
                <h4 className={css.filterType}>Vehicle equipment</h4>
                <div className={css.divider}/>

                <ul className={css.list}>
                    {checkBoxData.map(type =>
                        <li className={clsx(css.filterItem, Boolean(eqFilters[type]) && css.checked)} key={type}
                            onClick={() => handleEqFilterChange(type)}>
                            <Icon styles={css.img} width={112} height={96} type={type}/>
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <h4 className={css.filterType}>Vehicle type</h4>
                <div className={css.divider}/>

                <ul className={css.list}>
                    {radioData.map(type =>
                        <li className={clsx(css.filterItem, typeFilter === type && css.checked)} key={type}
                            onClick={() => handleTypeFilterChange(type)}>
                            <Icon styles={css.img} width={112} height={96} type={type}/>
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <h4 className={css.filterType}>Favorite</h4>
                <div className={css.divider}/>
                <div className={clsx(css.filterItem, isFavorite && css.checked)} onClick={() => handleFavoriteFilterChange()}>
                    <Icon styles={css.img} width={112} height={96} type="heart"/>
                </div>
            </div>
        </div>
    );
}
