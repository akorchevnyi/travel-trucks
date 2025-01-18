import css from "./ImageModal.module.css";

export default function ImageModal({ image, onClose }) {
    return (
        <div className={css.modalOverlay} onClick={onClose}>
            <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={image || "/placeholder.svg"} alt="Enlarged view" className={css.modalImage}/>
                <button className={css.closeButton} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
}
