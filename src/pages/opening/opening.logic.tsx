import { OpeningView } from "./opening.view";

import { useNavigate } from "react-router-dom";

export function Opening() {
    const navigate = useNavigate();
    const handleClickStart = () => {
        navigate("/explanation/first_explanation");
    };
    return <OpeningView handleClickStart={handleClickStart} />;
}
