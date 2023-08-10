import { useSelector } from "react-redux";

export const ComponentRedux2 = () => {

    const userState = useSelector( (store:any) => store.user);

    return(
        <h1>El usuario es: {JSON.stringify(userState)}</h1>
    );
};