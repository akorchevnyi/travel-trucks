import css from './Error.module.css';

export default function ErrorMessage({ error }) {
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Oops! Something went wrong</h2>
            <p className={css.message}>{error.message || 'An unexpected error occurred.'}</p>
            <button className={css.button} onClick={() => window.location.reload()}>
                Try Again
            </button>
        </div>
    );
}
