
export default function Icon({ onClick=null, width, height, styles, type }) {
    return (
        <svg onClick={onClick} className={styles} width={width} height={height}>
            <use xlinkHref={`/src/assets/sprite.svg#icon-${type}`}></use>
        </svg>
    );
}
