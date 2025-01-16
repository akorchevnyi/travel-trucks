import css from "./Categories.module.css";
import Icon from "../ui/Icon/Icon.jsx";

const categories = ["transmission", "engine", "AC", "TV", "kitchen", "radio", "bathroom", "refrigerator", "microwave", "gas", "water"];

export default function Categories({ camper }) {

    const equipment = categories.reduce((acc, cur) => {
        if (camper[cur] === true || camper[cur]) {
            acc.push({ id: cur.toLowerCase(), value: camper[cur] });
        }
        return acc;
    }, []);

    return (
        <ul className={css.list}>
            {equipment.map(({ id, value }) => {
                return (
                    <li className={css.category} key={id}>
                        <Icon type={`category-${id}`} width={20} height={20}/>
                        {value === true ? id : value}
                    </li>
                );
            })
            }
        </ul>
    );
}
