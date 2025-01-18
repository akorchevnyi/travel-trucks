import css from "./Icon.module.css";

export default function Icon({ onClick = null, width, height, styles, type }) {
    let iconStyle = styles;
    if (type === "rating") {
        iconStyle = styles === "rated" ? css.rated : css.unrated;
    }

    return (
        <svg onClick={onClick} className={iconStyle} width={width} height={height}>
            <use xlinkHref="/assets/sprite.abcd1234.svg#icon-id"></use>
        </svg>
    );
}
