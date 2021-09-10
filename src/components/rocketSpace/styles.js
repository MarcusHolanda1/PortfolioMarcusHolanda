import styled from "styled-components";

export const DivRocket = styled.div`

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
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

`;

export const SpaceRocketImage = styled.img`
    width: 400px;
    height: 400px;    
`;

export const Rocket = styled.img`
    
     
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
    position: absolute;
    width: 200px;
    height: 200px;
    display: block;
`;
