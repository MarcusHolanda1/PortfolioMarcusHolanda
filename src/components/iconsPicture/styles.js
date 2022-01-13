import styled from "styled-components";

// import IconGithub from "../../assets/icons/github.svg";
// // import IconLinkedin from '../../assets/icons/—Pngtree—linkedin white icon_3570423 1 (1).svg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

export const IconsDiv = styled.div`
    margin-left: 70px;
    margin-top: 45px;

    @media (max-width: 650px) {
        margin-left: 82px;
        margin-top: 60px;
    }
`;

export const IconGithubCSS = styled(FaGithub)`
    width: 25px;
    height: 25px;
    margin-right: 13px;
    color: white;
`;

export const IconLinkedinCSS = styled(FaLinkedin)`
    margin-right: 9px;
    width: 25px;
    height: 25px;
    color: white;
`;

export const IconEmailCSS = styled(HiOutlineMailOpen)`
    width: 27px;
    height: 27px;
    color: white;
`;
