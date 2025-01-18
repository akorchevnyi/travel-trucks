import { useSelector } from "react-redux";
import { selectError, selectFilteredCampers, selectLoading } from "../redux/campersSlice.js";

export default function useCampers() {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const campers = useSelector(selectFilteredCampers);
    const total = campers?.length || 0;

    return { loading, error, campers, total };
}
