import styled from "styled-components";

export const DivExperienceProfessional = styled.div`
    position: absolute;
    top: 0;
    width: 900px;
    height: 230px;
    margin-left: 0px;
    margin-top: 10px;
`;

export const TitleExperienceProfessional = styled.h2`
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

export const CardExperienceProfessional = styled.div`
    margin-top: 10px;
    margin-left: 50px;
    width: 310px;
    height: 180px;
    display: flex;
    flex-direction: column;
    background: #8728FF;
    border-radius: 10px;

`;

export const ImageCard = styled.img`
    width: 97px;
    height: 97px;

    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;

export const TitleCard = styled.h3`
    margin-top: 20px;
    color: white;
    font-size: 14px;
    text-align: center;
`
