import styled from 'styled-components/macro';

export const ModalView = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 110, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    cursor: pointer;
    border-radius: 8px;
`;

export const Title = styled.h3`
    color: white;
    font-size: 60px;
    font-weight: 600;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 40px;
    color: white;
    font-weight: 600;
`;