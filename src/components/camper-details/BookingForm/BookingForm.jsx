import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import css from "./BookingForm.module.css";
import CustomBtn from "../../common/ui/CustomBtn/CustomBtn.jsx";
import CustomDataPicker from "../../common/ui/CustomDataPicker/CustomDataPicker.jsx";
import clsx from "clsx";


const validationSchema = Yup.object().shape({
    name       : Yup.string().required("Name is required"),
    email      : Yup.string().email("Invalid email").required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment    : Yup.string()
});

const initialValues = {
    name       : "",
    email      : "",
    bookingDate: "",
    comment    : ""
};

export default function BookingForm() {
    const handleSubmit = (values, { resetForm }) => {
        iziToast.success({
            title   : "Success",
            message : "Your booking request has been received!",
            position: "topRight"
        });
        resetForm();
    };

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <h2 className={css.title}>Book your campervan now</h2>
                <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
            </div>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ errors, touched, values, setFieldValue }) => (
                    <Form className={css.form}>
                        <div className={css.inputsWrapper}>
                            <div className={css.inputGroup}>
                                <Field name="name" type="text" placeholder="Name*"
                                       className={`${css.input} ${errors.name && touched.name ? css.errorInput : ""}`}/>
                                <ErrorMessage name="name" component="div" className={css.errorMessage}/>
                            </div>

                            <div className={css.inputGroup}>
                                <Field name="email" type="email" placeholder="Email*"
                                       className={`${css.input} ${errors.email && touched.email ? css.errorInput : ""}`}/>
                                <ErrorMessage name="email" component="div" className={css.errorMessage}/>
                            </div>

                            <div className={css.inputGroup}>
                                <CustomDataPicker styles={clsx(css.input, errors.bookingDate && touched.bookingDate ? css.errorInput : "")}
                                                  setFieldValue={setFieldValue} values={values} errors={errors} touched={touched}/>
                                <ErrorMessage name="bookingDate" component="div" className={css.errorMessage}/>
                            </div>

                            <Field className={css.textarea} name="comment" as="textarea" placeholder="Comment"/>
                        </div>

                        <CustomBtn title="Send" variant="accent" type="submit"/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
