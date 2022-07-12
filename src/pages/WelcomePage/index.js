import React from "react";

import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";

import * as S from "./styles";
import lottieWelcome from "../../assets/lotties/welcome/welcome-lottie.json";

const WelcomePage = () => {
    const defaultOptionsLottie = {
        loop: true,
        autoplay: true,
        animationData: lottieWelcome,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const history = useHistory();
    const handleOnClick = (route) => history.push(route);

    return (
        <S.Container>
            <Lottie options={defaultOptionsLottie} height={400} width={400} />
            <h1 style={{ color: "white", marginBottom: 36 }}>
                Preparado para me conhecer?
            </h1>
            <S.Button onClick={() => handleOnClick("/portfolio")}>
                VAMOS LÁ
            </S.Button>
        </S.Container>
    );
};
export default WelcomePage;
