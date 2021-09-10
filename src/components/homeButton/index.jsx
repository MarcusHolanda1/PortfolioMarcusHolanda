import React from 'react';
import { useHistory } from 'react-router';

import { Section, Button, Title } from "./styles";

const HomeButton = (props) => {
    const history = useHistory()
    const handleOnClick = route => history.push(route)

    return (
        <Section>
            <Title>Preparado para me conhecer?</Title>
            <Button onClick={() => handleOnClick('/portfolio')}>VAMOS LÁ</Button>
        </Section>
    );
};
export default HomeButton;
