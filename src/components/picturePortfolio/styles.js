import styled from "styled-components";

export const PictureDiv = styled.div`
    width: 20px;
    height: 150px;
    display: flex;
    align-items: left;
    justify-content: left;
`;

export const Picture = styled.div`
    margin-top: 48px;
    margin-left: 68px;
    width: 134px;
    height: 134px;
    border: solid 2.5px transparent;
    /* border-radius: 50%;
    background-color: red;
    background-image: linear-gradient(white, white), radial-gradient(circle at top right, #DA0083
  ,#7101FF
);
  background-origin: border-box;
  background-clip: content-box, border-box; */

    //funfando 90//

    position: absolute;
    background-clip: content-box;
    display: block;
    border-radius: 50%;
    animation: spin 10s linear infinite;

    background-image: linear-gradient(white, white),
        radial-gradient(circle at top right, #FFFF, #8728ff);
    background-clip: content-box, border-box;

    border: double 4px transparent;
    @keyframes spin {
        100% {
            transform: rotateZ(360deg);
        }
    }
`;

export const Vaisefode = styled.img`
    position: relative;
    border-radius: 50%;
    margin-top: 50px;
    margin-left: 70px;
    width: 130px;
    height: 130px;

    &::before,
    ::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;
