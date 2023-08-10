import { createUser } from "@/app/redux/states/user";
import { useDispatch } from "react-redux";

export const ComponentRedux1 = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(createUser({name: "Ronald", email: "roni@hot.com"}));
    };

    return (
        <button onClick={handleClick}> create user </button>
    );
};