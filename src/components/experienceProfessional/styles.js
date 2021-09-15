import styled from "styled-components";

export const DivExperienceProfessional = styled.div`
    top: 0;
    width: 900px;
    height: 200px;
    margin-left: 0px;
    margin-top: 10px;

    display: flex;
    flex-direction: row;

    @media (max-width: 975px) {
        padding-top: 350px;
        margin-left: 0;
        margin-right: 0;

        width: min(90vw, 800px);
        height: max(30vh, 250px);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width: 650px) {
        padding-top: 350px;
        margin-left: 0;
        margin-right: 0;

        width: min(90vw, 290px);
        height: max(30vh, 250px);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const TitleExperienceProfessional = styled.h2`
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 5px;
    position: relative;

    margin-top: 35px;

    color: white;

    @media (max-width: 650px) {
        font-size: 18px;
        text-align: center;
        justify-content: center;
    }

    /* &:after {
        content: "";
        position: absolute;
        width: 20%;
        height: 1px;
        bottom: 0;
        border-bottom: 1px solid #7806bd;
    } */
`;

export const CardExperienceProfessional = styled.div`
    margin-top: 20px;
    margin-left: 50px;
    width: 340px;
    height: 340px;
    display: flex;
    flex-direction: column;
    background: #8728ff;
    border-radius: 10px;

    @media (max-width: 975px) {
        margin-left: 0;
        margin-right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width: 650px) {
        width: 240px;
        height: 340px;
    }
`;

export const ImageCard = styled.img`
    width: 97px;
    height: 97px;

    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;

export const DivExp = styled.div`
    width: 280px;
    height: 240px;

    margin-left: auto;
    margin-right: auto;

    @media (max-width: 650px) {
        width: 240px;
        height: 340px;

        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const TitleCard = styled.h3`
    margin-top: 20px;
    color: white;
    font-size: 18px;
    text-align: center;
`;
export const ExpAPP = styled.h4`
    font-style: normal;
    font-weight: 300;
    font-size: 11px;

    color: #b6b6b6;

    margin-top: 20px;
`;

export const ExpText = styled.h4`
    margin-top: 10px;
    font-family: Roboto, sans-serif;
    font-size: 14px;

    color: white;
    font-weight: normal;

    @media (max-width: 650px) {
        font-size: 13px;
    }
`;

///Tester

export const TitleExperienceProfessionalTester = styled.h2`
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 5px;
    position: relative;

    color: white;

    &:after {
        content: "";
        position: absolute;
        width: 20%;
        height: 1px;
        bottom: 0;
        border-bottom: 1px solid #7806bd;
    }
`;

export const CardExperienceProfessionalTester = styled.div`
    margin-top: 20px;
    margin-left: 115px;
    width: 340px;
    height: 340px;
    display: inline-block;
    flex-direction: row;
    background: #8728ff;
    border-radius: 10px;

    @media (max-width: 975px) {
        margin-left: 0;
        margin-right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width: 650px) {
        width: 240px;
        height: 340px;
    }
`;

export const ImageCardTester = styled.img`
    width: 97px;
    height: 97px;

    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;

export const DivExpTester = styled.div`
    width: 280px;
    height: 240px;

    margin-left: auto;
    margin-right: auto;

    @media (max-width: 650px) {
        width: 240px;
        height: 340px;

        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const TitleCardTester = styled.h3`
    margin-top: 20px;
    color: white;
    font-size: 18px;
    text-align: center;
`;
export const ExpAPPTester = styled.h4`
    font-style: normal;
    font-weight: 300;
    font-size: 11px;

    color: #b6b6b6;

    margin-top: 20px;

    @media (max-width: 650px) {
        font-size: 13px;
    }
`;

export const ExpTextTester = styled.h4`
    margin-top: 10px;
    font-family: Roboto, sans-serif;
    font-size: 14px;

    color: white;
    font-weight: normal;
`;
