import css from "./HomePage.module.css";
import clsx from "clsx";
import CustomBtn from "../../components/common/ui/CustomBtn/CustomBtn.jsx";
import { useNavigate } from "react-router";

export default function HomePage() {
    const navigate = useNavigate();

    const textWrapper = clsx(css.wrapper, "container");

    const handleBtnClick = () => navigate("/campers");

    return (
        <div className={css.hero}>
            <div className={textWrapper}>
                <h1 className={css.header}>Campers of your dreams</h1>
                <h2 className={css.motto}>You can find everything you want in our catalog</h2>
                <CustomBtn title="View now" variant="accent" onClick={handleBtnClick}>Button</CustomBtn>
            </div>
        </div>
    );
};
