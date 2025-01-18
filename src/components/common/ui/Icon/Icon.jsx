import css from "./Icon.module.css";
import sprite from "/src/assets/sprite.svg";


export default function Icon({ onClick = null, width, height, styles, type }) {
    let iconStyle = styles;
    if (type === "rating") {
        iconStyle = styles === "rated" ? css.rated : css.unrated;
    }

    return (
        <svg onClick={onClick} className={iconStyle} width={width} height={height}>
            <use xlinkHref={`${sprite}#icon-${type}`}></use>
        </svg>
    );
}
