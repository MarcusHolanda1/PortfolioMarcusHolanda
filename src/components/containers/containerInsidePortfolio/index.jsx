import { Section, Container } from "./styles";

const InsideContainer = (props) => {
    return (
        <Section>
            <Container>{props.children}</Container>
        </Section>
    );
};

export default InsideContainer;
