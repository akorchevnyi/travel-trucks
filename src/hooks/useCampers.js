import { useSelector } from "react-redux";
import { selectError, selectFilteredCampers, selectLoading, selectTotal } from "../redux/campersSlice.js";

export default function useCampers() {
    const total = useSelector(selectTotal);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const campers = useSelector(selectFilteredCampers);

    return { total, loading, error, campers };
}
