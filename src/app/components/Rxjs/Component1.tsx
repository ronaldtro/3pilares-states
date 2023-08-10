

import { sharingInformationService } from "../../services/sharing-information.service";

export const Component1 = () => {


    const handleClick = () => {
        sharingInformationService.setSubject(true);
    }

    const handleClickNo = () => {
        sharingInformationService.setSubject(false);
    };

    return (
        <div>
            <button onClick={handleClick}> Enviar information</button>
            <button onClick={handleClickNo}> No Enviar information</button>
        </div>
    );
};
