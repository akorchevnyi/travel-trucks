import clsx from "clsx";
import css from "./CustomBtn.module.css";

export default function CustomBtn({ title, type = "accent", onClick }) {
    const btnStyle = clsx(css.btn, type === "accent" && css.accentBtn, type === "common" && css.commonBtn);

    return (
        <div>
            <button className={btnStyle} onClick={onClick}>{title}</button>
        </div>
    );
}
