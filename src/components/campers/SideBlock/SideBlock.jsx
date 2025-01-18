import css from "./SideBlock.module.css";
import LocationOption from "../LocationOption/LocationOption.jsx";
import Filters from "../Filters/Filters.jsx";
import CustomBtn from "../../common/ui/CustomBtn/CustomBtn.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../../redux/filtersSlice.js";
import { applyFilters } from "../../../redux/campersSlice.js";
import { fetchCampers } from "../../../redux/campersOperations.js";

export default function SideBlock() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const handleSearch = () => {
        dispatch(applyFilters(filters));

        const params = createParams(filters);

        if (Object.keys(params).length > 0) {
            dispatch(fetchCampers(params));
        }
    };

    return (
        <div className={css.wrapper}>
            <LocationOption/>
            <Filters/>
            <CustomBtn title="Search" variant="accent" onClick={handleSearch}/>
        </div>
    );
}


function createParams(filters) {
    const {equipment, type} = filters;

    const equipmentFilters = Object.keys(equipment)
        .filter(key => equipment[key])
        .reduce((acc, key) => {
            if (key === "automatic") {
                acc.transmission = "automatic"
                return acc;
            }
            acc[key] = equipment[key];
            return acc;
        }, {});

    return {
        ...equipmentFilters,
        ...(type && { form: type })
    };
}
