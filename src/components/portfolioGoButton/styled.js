import styled from "styled-components";

export const DivPortfolioButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PortfolioButton = styled.button`
    width: 120px;
    height: 40px;
    background: #8728ff;
    border-radius: 100px;

    position: absolute;
    top: 90%;
    left: 43%;
    margin: -25px 0 0 -25px;

    cursor: pointer;

    align-items: center;
    color: white;
    font-weight: bold;

    &:hover{
        
    background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca);

    }
`;
