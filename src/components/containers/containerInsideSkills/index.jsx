import { Section, Container } from "./styles";

const InsideContainerSkills = (props) => {
    return (
        <Section>
            <Container>{props.children}</Container>
        </Section>
    );
};

export default InsideContainerSkills;
