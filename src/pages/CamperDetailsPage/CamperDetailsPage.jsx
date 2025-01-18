import { useEffect, useState } from "react";
import css from "./CamperDetailsPage.module.css";
import clsx from "clsx";
import { Outlet, useParams } from "react-router";
import LocationReview from "../../components/common/LocationReview/LocationReview.jsx";
import { NavLink, useLocation } from "react-router-dom";
import ImageModal from "../../components/camper-details/ImageModal/ImageModal.jsx";
import BookingForm from "../../components/camper-details/BookingForm/BookingForm.jsx";
import { Loader } from "../../components/common/ui/Loader/Loader.jsx";
import ErrorMessage from "../../components/common/Error/ErrorMessage.jsx";
import iziToast from "izitoast";
import { useDispatch } from "react-redux";
import { fetchCamperById } from "../../redux/campersOperations.js";
import useCamper from "../../hooks/useCamper.jsx";


export default function CamperDetailsPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        dispatch(fetchCamperById(id));
    }, [dispatch, id]);

    const { camper, loading, error } = useCamper(id);

    if (loading) return <Loader/>;
    if (error) {
        iziToast.error({
            title   : "Error",
            message : "Error while loading camper. Please try again later.",
            position: "topRight"
        });
        return <ErrorMessage error="Error while loading camper. Please try again later."/>;
    }
    if (!camper) return <p>Camper not found</p>;

    const isFeatureRoute = location.pathname.endsWith(`/campers/${id}`) || location.pathname.endsWith(`/features`);

    const { name, location: camperLocation, rating, reviews, price, gallery, description } = camper || {};

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            {camper && (
                <div className="container">
                    <div className={css.wrapper}>
                        <div className={css.info}>
                            <h3 className={clsx(css.head, css.stressed)}>{name}</h3>
                            <LocationReview location={camperLocation} rating={rating} reviews={reviews?.length}/>
                            <p className={clsx(css.price, css.stressed)}>€{price}{price === Math.floor(price) && ".00"}</p>
                        </div>

                        <ul className={css.gallery}>
                            {gallery.slice(0, 4).map(({ thumb, original }, index) => (
                                <li className={css.imageWrapper} key={index} onClick={() => openModal(original)}>
                                    <img src={thumb || "/placeholder.svg"} alt={name}/>
                                </li>
                            ))}
                        </ul>

                        <p className={css.description}>{description}</p>
                    </div>

                    <div className={css.tabsWrapper}>
                        <NavLink className={({ isActive }) => clsx(css.tab, (isActive || isFeatureRoute) && css.active)} to="features"
                                 state={location.state}>
                            Features
                        </NavLink>
                        <NavLink className={({ isActive }) => clsx(css.tab, isActive && css.active)} to="reviews" state={location.state}>
                            Reviews
                        </NavLink>
                    </div>
                    <div className={css.contentWrapper}>
                        {camper && <Outlet context={camper}/>}
                        <BookingForm/>
                    </div>


                    {selectedImage && (
                        <ImageModal image={selectedImage} onClose={closeModal}/>
                    )}
                </div>
            )}
        </>
    );
}
