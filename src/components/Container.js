import React from 'react';
import styled from 'styled-components/macro';

const ContainerComponent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const Container = ({ children }) => {
    return (
        <ContainerComponent>
            {children}
        </ContainerComponent>
    );
};