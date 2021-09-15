import styled from "styled-components";

export const TitlesDiv = styled.div`
    position: absolute;
    top: 0;
    left: 230px;
    width: 630px;
    height: 245px;
    margin-left: 0px;

    @media (max-width: 970px) {
        width: 545px;
    }
    @media (max-width: 890px) {
        width: 345px;
        height: 320px;
    }
    @media (max-width: 650px) {
        width: 230px;
        top: 250px;
        left: 30px;
    }
`;

export const MyName = styled.h1`
    font-style: normal;
    font-weight: normal;
    margin-top: 40px;
    font-size: 40px;

    color: #ffffff;

    @media (max-width: 650px) {
        font-size: 20px;
    }
`;

export const MyProfession = styled.h4`
    font-style: italic;
    font-weight: normal;
    margin-top: 40px;
    font-size: 15px;

    margin-right: 25px;

    text-align: start;
    color: #ffffff;

    @media (max-width: 650px) {
        font-size: 15px;
        margin-right: 0px;
    }
`;
