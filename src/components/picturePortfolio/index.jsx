import { PictureDiv, Picture, Vaisefode } from "./styles";

import PicturePhoto from "../../assets/images/me.jpg";

export const PicturePortfolio = (props) => {
    return (
        <PictureDiv>
            <Picture></Picture>
            <Vaisefode src={PicturePhoto}></Vaisefode>
        </PictureDiv>
    );
};

export default PicturePortfolio;
