
import { useRonaldContext } from "../context/ronald.context";

export const ComponentContext1 = () => {

    const {valorContext, setValorContext} = useRonaldContext();

    const handleClick = () => {
        setValorContext(777);
    };

    return (
        <button onClick={handleClick}>Enviar informacion por el context</button>
    );
};