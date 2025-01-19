import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enGB } from "react-day-picker/locale";

export default function CustomDataPicker({ values, setFieldValue, styles }) {
    return (
        <DatePicker
            selected={values.bookingDate}
            onChange={(date) => setFieldValue("bookingDate", date)}
            placeholderText="Booking date*"
            className={styles}
            locale={enGB}
            minDate={new Date()}
            formatWeekDay={day => day.substring(0, 3)}
        />
    );
}
