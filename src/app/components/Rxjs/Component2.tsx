
import { useEffect, useState } from "react";
import { sharingInformationService } from "@/app/services/sharing-information.service";

export const Component2 = () => {

    const [cont, setCont] = useState<number>(0);
    const subscription$ = sharingInformationService.getSubject();

    useEffect(() => {
        subscription$.subscribe( (data:boolean) => {
            if(data == true){
                setCont(cont+1);
            }
            
        });
    });

    return (
        <h1>Contador {cont}</h1>
    );
};