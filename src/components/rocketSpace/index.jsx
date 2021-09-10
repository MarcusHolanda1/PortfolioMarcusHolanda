import { DivRocket, SpaceRocketImage, Rocket} from './styles'

import SpaceRocket from '../../assets/images/space.svg'
import RocketTest from '../../assets/images/rocket.svg'

const RocketSpace = (props) => {
    return (
        <DivRocket>
            <SpaceRocketImage src={SpaceRocket} alt="Espaco"></SpaceRocketImage>
            <Rocket src={RocketTest} alt="Foguete flutuante"></Rocket>
        </DivRocket>
    )
}
export default RocketSpace