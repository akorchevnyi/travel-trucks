import css from "./SideBlock.module.css";
import LocationOption from "../LocationOption/LocationOption.jsx";
import Filters from "../Filters/Filters.jsx";
import CustomBtn from "../ui/CustomBtn/CustomBtn.jsx";

export default function SideBlock() {
    const handleSearch = () => {
        console.log("==== 1 ==> ", 1);
    };

    return (
        <div className={css.wrapper}>
            <LocationOption/>
            <Filters/>
            <CustomBtn title="Search" type="accent" onClick={handleSearch}/>
        </div>
    );
}
