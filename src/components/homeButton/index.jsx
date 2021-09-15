import React from "react";
import { useHistory } from "react-router";

import { Section, Button, Title } from "./styles";

import Shake from 'react-reveal/Shake';

const HomeButton = (props) => {
    const history = useHistory();
    const handleOnClick = (route) => history.push(route);

    return (
       
        <Section>
            <Title>Preparado para me conhecer?</Title> <Shake>
            <Button onClick={() => handleOnClick("/portfolio")}>
                VAMOS LÁ
            </Button> </Shake>
        </Section>
       
    );
};
export default HomeButton;
