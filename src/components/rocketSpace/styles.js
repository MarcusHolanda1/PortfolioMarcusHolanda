import styled from "styled-components";

export const DivRocket = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
