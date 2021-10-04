import React from 'react';
import styled from 'styled-components/macro';

import { ModalView, Title } from './Styled';

const Description = styled.p`
    font-size: 40px;
    color: white;
    font-weight: 600;
`;

export const WelcomeModalView = ({ onClick }) => {
    return (
        <ModalView onClick={onClick}>
            <Title>
                Игра "Память"
            </Title>
            <Description>
                Нажмите чтобы начать игру
            </Description>
        </ModalView>
    );
};