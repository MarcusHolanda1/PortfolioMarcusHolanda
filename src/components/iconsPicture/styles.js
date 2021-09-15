import styled from "styled-components";

import IconGithub from "../../assets/icons/github.svg";
// import IconLinkedin from '../../assets/icons/—Pngtree—linkedin white icon_3570423 1 (1).svg'
import IconEmail from "../../assets/icons/email.svg";

import IconLinkedin from "../../assets/icons/linkedin-icon-18-ffffff-23.ico";

export const IconsDiv = styled.div`
    margin-left: 70px;
    margin-top: 45px;

    @media (max-width: 650px) {
        margin-left: 82px;
        margin-top: 60px;
    }
`;

export const IconGithubCSS = styled.button`
    width: 27px;
    height: 27px;
    margin-right: 13px;

    background-color: #3b006a;
    background-image: url(${IconGithub});
    cursor: pointer;
    background-repeat: no-repeat;
`;

export const IconLinkedinCSS = styled.button`
    margin-right: 9px;

    width: 25px;
    height: 25px;

    background-color: red;
    background-image: url(${IconLinkedin});
    background-color: #3b006a;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const IconEmailCSS = styled.button`
    /* padding-bottom: 30px; */
    width: 27px;
    height: 27px;

    background-color: #3b006a;
    background-image: url(${IconEmail});
    cursor: pointer;
    background-repeat: no-repeat;
`;
