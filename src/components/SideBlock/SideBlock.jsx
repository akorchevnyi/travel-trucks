import css from "./SideBlock.module.css";
import LocationOption from "../LocationOption/LocationOption.jsx";
import Filters from "../Filters/Filters.jsx";
import CustomBtn from "../common/ui/CustomBtn/CustomBtn.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filtersSlice.js";
import { applyFilters } from "../../redux/campersSlice.js";

export default function SideBlock() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const handleSearch = () => {
        dispatch(applyFilters(filters));
    };

    return (
        <div className={css.wrapper}>
            <LocationOption/>
            <Filters/>
            <CustomBtn title="Search" type="accent" onClick={handleSearch}/>
        </div>
    );
}
