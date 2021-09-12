import styled from "styled-components";

export const Section = styled.section`
    padding-left: 0px;
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    -webkit-animation: fadein 7s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 7s; /* Firefox < 16 */
    -ms-animation: fadein 7s; /* Internet Explorer */
    -o-animation: fadein 7s; /* Opera < 12.1 */
    animation: fadein 7s;

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

export const Title = styled.h1`
    padding-bottom: 60px;

    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
`;

export const Button = styled.button`
    width: 255px;
    height: 70px;
    background: #8728FF;   
     border-radius: 50px;

    cursor: pointer;
    font-size: 33px;
    color: white;

    &:hover {
        box-shadow: 0 0.7em 0.7em -0.3em #f018e1;
        transform: translateY(-0.09em);
        transition: all 0.8s ease 0s;
    }
`;
