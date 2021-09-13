import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 22px;
`;

export const Container = styled.div`
    width: 900px;
    height: 516px;

    background: #3b006a;
    border-radius: 15px;

    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: all 0.8s ease 0s, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s,
        transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;

    border: 3px solid #3b006a;

    &:hover {
        border: 3px solid #6610f2;
    }
`;
