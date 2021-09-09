import { DivRocket, SpaceRocketImage} from './styles'

import SpaceRocketTest from '../../assets/images/space-amico.svg'

const RocketSpace = (props) => {
    return (
        <DivRocket>
            <SpaceRocketImage src={SpaceRocketTest}></SpaceRocketImage>
        </DivRocket>
    )
}
export default RocketSpace