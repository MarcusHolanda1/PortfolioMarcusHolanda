import styled from "styled-components";

export const DivSkills = styled.div`
    width: 400px;
    height: 400px;

    display: inline-block;
    flex-direction: row;
    margin-left: 0px;
`;

export const SkillsTitle = styled.h1`
    margin-top: 35px;
    margin-left: 60px;

    color: white;
    font-size: 24px;
    text-align: left;

    @media (max-width: 650px) {
        font-size: 17px;
    }
`;

export const ImageSkillsTest = styled.img`
    margin-right: 10px;
    margin-left: 0;
`;

export const SpanSkillTest = styled.a`
    position: absolute;
    color: white;

    font-size: 16px;

    margin-top: 10px;

    a {
        position: relative;
        color: #fff;
        text-decoration: none;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: white;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`;

export const DivSkillTest = styled.div`
    width: 300px;
    height: 50px;

    margin-left: 60px;
    margin-top: 30px;
`;
