import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 300px 40px 300px;

    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    /* Internet Explorer */
    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const CardMe = styled.div`
    display: flex;

    @media (max-width: 1080px) {
        flex-direction: column;
    }
`;

export const ContentAvatar = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
`;

export const Avatar = styled.img`
    object-fit: cover;
    border-radius: 50%;
    width: 124px;
    height: 124px;
    border: double 3px transparent;

    background-image: linear-gradient(transparent, transparent),
        radial-gradient(circle at top left, #f00, #3020ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

export const ContentTitleProfile = styled.div`
    margin-left: 42px;

    @media (max-width: 1080px) {
        flex-direction: column;
        app-h1 {
            font-size: 10;
        }
    }
`;

export const Socials = styled.div`
    display: flex;
    margin-top: 16px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const ButtonIcon = styled.button`
    background: transparent;

    cursor: pointer;
`;

export const CardExperience = styled.div`
    max-width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #8628fe;
    border-radius: 8px;
`;

export const ContentCardExperience = styled.div`
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3ch;

    @media (max-width: 1376px) {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 3ch;
    }
`;

export const CardSkills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const MainSkills = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OtherSkills = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GeneralKnowledge = styled.div``;

export const CardAboutMe = styled.div`
    display: flex;
    flex-direction: column;
`;
