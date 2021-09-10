import { PictureDiv, Picture } from "./styles"

import PicturePhoto from '../../assets/images/me.jpg'

export const PicturePortfolio = props => {
    return (
        <PictureDiv>
            <Picture src={PicturePhoto}></Picture>
        </PictureDiv>
    )
}

export default PicturePortfolio