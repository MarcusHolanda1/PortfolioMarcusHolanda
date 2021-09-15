import { Section, Container } from "./styles";
import Fade from 'react-reveal/Fade';

const InsideContainerCard = (props) => {
    return (
        <Fade left>
        <Section>
            <Container>{props.children}</Container>
        </Section>
        </Fade>
    );
};

export default InsideContainerCard;
