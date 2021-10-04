import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { ModalView, Title, Description } from './Styled';
import { gameTimeFormat } from '../helpers/dataFormatHelpers';

export const GameOverView = ({ onClick, gameTime, attemptsHistory }) => {
    return (
        <ModalView onClick={onClick}>
            <Title>
                 Игра окончена
            </Title>
            <Description>
                Время игры составило: {gameTimeFormat(gameTime)}
            </Description>
            <Description>
                Количество попыток: {attemptsHistory.length}
            </Description>
        </ModalView>
    );
};

const mapStateToProps = state => ({
    gameTime: state.gameTime,
    attemptsHistory: state.attemptsHistory,
});

export const GameOver = connect(mapStateToProps)(GameOverView);