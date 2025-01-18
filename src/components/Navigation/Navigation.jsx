import css from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../assets/logo.svg";

export default function Navigation() {
    const navClass = ({ isActive }) => clsx(css.navLink, isActive && css.active);

    return (
        <div className={css.navRow}>
            <div className={clsx(css.container, "container")}>
                <Link to="/" className={css.navLogo}>
                    <img className={css.navLink} src={Logo} width={135} alt="company logo"/>
                </Link>
                <div className={css.menuWrapper}>
                    <div className={css.menu}>
                        <NavLink to="/" className={navClass}>Home</NavLink>
                        <NavLink to="/campers" className={navClass}>Catalog</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
