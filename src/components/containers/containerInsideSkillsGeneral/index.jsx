import { Section, Container } from "./styles";

const InsideContainerSkillsGeneral = (props) => {
    return (
        <Section>
            <Container>{props.children}</Container>
        </Section>
    );
};

export default InsideContainerSkillsGeneral;
