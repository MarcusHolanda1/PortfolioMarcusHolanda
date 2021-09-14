import styled from "styled-components";

import IconGithub from '../../assets/icons/GitHub_Icon.svg'
// import IconLinkedin from '../../assets/icons/—Pngtree—linkedin white icon_3570423 1 (1).svg'
import IconEmail from '../../assets/icons/email_icon.svg'

import IconLinkedin from '../../assets/icons/linkedin-icon-18-ffffff-23.ico'

export const IconsDiv = styled.div`
    margin-left: 58px;
    margin-top: 30px;
`;

export const IconGithubCSS = styled.button`
    
    width: 54px;
    height: 36px;

    background-color: #3B006A;
    background-image: url(${IconGithub});
    cursor: pointer;

    &:hover{
        background-color: black;
    }

`;

export const IconLinkedinCSS = styled.button`
    
    margin-right: 9px;

    width: 25px;
    height: 29px;

    background-color: red;
    background-image: url(${IconLinkedin});
    background-color: #3B006A;
    background-repeat: no-repeat;
    cursor: pointer;


    &:hover{
        background-color: black;
    }

`;

export const IconEmailCSS = styled.button`
    /* padding-bottom: 30px; */
    width: 32px;
    height: 35px;

    background-color: #3B006A;
    background-image: url(${IconEmail});
    cursor: pointer;

    &:hover{
        background-color: black;
    }
`;
