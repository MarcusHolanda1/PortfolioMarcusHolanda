import styled from 'styled-components'

export const PictureDiv = styled.div`
    width: 100%;
    height: 0;
    display: flex;
    align-items: left;
    justify-content: left;
`

export const Picture = styled.img`
    margin-top: 50px;
    margin-left: 70px;
    width: 130px;
    height: 130px;
    border: double 2.5px transparent;
  border-radius: 50%;
  background-image: linear-gradient(white, white), radial-gradient(circle at top right, #DA0083
,#7101FF
);
  background-origin: border-box;
  background-clip: content-box, border-box;
`