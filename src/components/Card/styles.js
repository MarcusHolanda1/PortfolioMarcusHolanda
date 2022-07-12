import styled from "styled-components";

export const Container = styled.div`
    padding: 36px;
    background-color: #3b006a;

    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: all 0.8s ease 0s, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s,
        transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;
    border: 3px solid #3b006a;
    border-radius: 15px;

    &:hover {
        border: 3px solid #6610f2;
    }

    @media (max-width: 1080px) {
        padding: 24px;
    }
`;
