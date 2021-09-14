import { Section, Container } from "./styles";

const InsideContainerAboutMe = (props) => {
    return (
            <Section>
                <Container>
                    {props.children}
                </Container>
            </Section>
    );
};

export default InsideContainerAboutMe;