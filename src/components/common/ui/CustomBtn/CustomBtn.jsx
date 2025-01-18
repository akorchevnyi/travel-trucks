import clsx from "clsx";
import css from "./CustomBtn.module.css";

export default function CustomBtn({ title, variant = "accent", type = "button", onClick }) {
    const btnStyle = clsx(css.btn, variant === "accent" ? css.accentBtn : css.commonBtn);

    return (
        <div>
            <button className={btnStyle} onClick={onClick} type={type}>{title}</button>
        </div>
    );
}
