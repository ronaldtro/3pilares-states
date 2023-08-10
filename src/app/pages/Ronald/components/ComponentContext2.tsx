
import { useEffect } from "react";
import { useRonaldContext } from "../context/ronald.context";

export const ComponentContext2 = () => {
    
    const {valorContext, setValorContext} = useRonaldContext();
    const value:number = valorContext;   

    return (
        <h2>El valor del context es: {value}</h2>
    );
};