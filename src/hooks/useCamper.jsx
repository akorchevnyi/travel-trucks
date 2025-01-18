import { useSelector } from "react-redux";
import { selectError, selectLoading, selectSelectedCamper } from "../redux/campersSlice.js";

export default function useCamper() {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const camper = useSelector(selectSelectedCamper);

    return { loading, error, camper };
}
