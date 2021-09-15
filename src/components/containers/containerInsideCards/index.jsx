import { Section, Container } from "./styles";

const InsideContainerCard = (props) => {
    return (
        <Section>
            <Container>{props.children}</Container>
        </Section>
    );
};

export default InsideContainerCard;
