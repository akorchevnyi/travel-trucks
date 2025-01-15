import css from "./LocationOption.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation, selectLocation } from "../../redux/filtersSlice.js";
import Icon from "../ui/Icon/Icon.jsx";

export default function LocationOption() {
    const dispatch = useDispatch();
    const filter = useSelector(selectLocation);

    const handleFilterChange = ({ target: { value } }) => dispatch(changeLocation(value));

    return (
        <div className={css.wrapper}>
            <label className={css.label} htmlFor="location">Location</label>
            <input className={clsx("input", css.input)} type="text" id="location" value={filter} onChange={handleFilterChange} placeholder="City"/>
            <Icon type="location" width={20} height={20} styles={css.icon}/>
        </div>
    );
}
