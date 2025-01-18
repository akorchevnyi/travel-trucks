import css from "./Categories.module.css";
import Icon from "../ui/Icon/Icon.jsx";
import { capitalize } from "../../../util/capitalize.js";

const categories = ["transmission", "engine", "AC", "TV", "kitchen", "radio", "bathroom", "refrigerator", "microwave", "gas", "water"];

export default function Categories({ camper }) {

    const equipment = categories.reduce((acc, cur) => {
        if (camper[cur] === true || camper[cur]) {
            acc.push({ id: cur.toLowerCase(), value: camper[cur], title: cur });
        }
        return acc;
    }, []);

    return (
        <ul className={css.list}>
            {equipment.map(({ id, value, title }) => {
                return (
                    <li className={css.category} key={id}>
                        <Icon type={`category-${id}`} width={20} height={20}/>
                        {capitalize(value === true ? title : value)}
                    </li>
                );
            })
            }
        </ul>
    );
}
