import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
`;

export const Container = styled.div`
    width: min(90vw, 900px);
    height: max(30vh, 415px);
    margin: auto;

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

    @media (max-width: 975px) {
        height: max(50vh, 830px);
    }

    @media (max-width: 650px) {
        width: 300px;
        height: 1000px;
    }
`;
