import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
`;

export const Button = styled.button`
    max-width: 200px;
    padding: 16px;
    border-radius: 8px;

    cursor: pointer;
    font-size: 33px;
    color: white;

    background-color: #8628fe;

    &:hover {
        box-shadow: 0 0.7em 0.7em -0.3em #f018e1;
        transform: translateY(-0.09em);
        transition: all 0.8s ease 0s;
    }

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
