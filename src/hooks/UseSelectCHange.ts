import { useDispatch } from "react-redux";
import { setFormData } from "../redux/slice/createProjectSlice";

const useHandleSelectChange = () => {
    const dispatch = useDispatch();

    const handleSelectChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        dispatch(setFormData({ [name]: value }));
    };

    return handleSelectChange;
};

export default useHandleSelectChange;
