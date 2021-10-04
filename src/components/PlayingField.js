import React, { useRef, useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { Card } from './Card';
import { WelcomeModalView } from '../components/WelcomeModal';
import { GameOver } from './GameOver';
import { Stopwatch } from './Stopwatch';
import { CARD_ROTATE_ANIMATION_TIME, RESPONSE_TIME } from '../constants/appConstants';
import * as actions from '../redux/actions';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    aling-items: center;
    border-radius: 8px;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 10px;

    &:last-child {
        margin: 0;
    }
`;

const FieldWrap = styled.div`
    position: relative;
    padding: 5px;
`;

export const PlayingFieldView = ({ 
    playingFields, 
    showCardAction, 
    setCurrentCardAction, 
    currentSelectCard,
    clearCurrentCardAction, 
    hideCardAction,
    showCards,
    visibileHiddenCardAction,
    clearStateAction,
    setGameTimeAction,
    addHistoryAttempAction,
}) => {
    const [isGameRunning, setGameRunning] = useState(false);
    const [isGameOver, setGameOver] = useState(false);

    const timerId = useRef(null);

    const handlePlayStartClick = () => setGameRunning(true);

    const handleGameOverClick = () => {
        setGameOver(false);
        setGameRunning(false);
        clearStateAction();
    }

    const handleChangeGameTime = useCallback((time) => {
        setGameTimeAction(time);
    }, [setGameTimeAction]);

    const handelClickCard = (item) => {
        if (showCards.length === 2 || !isGameRunning) {
            return;
        }

        showCardAction(item);

        if (!currentSelectCard) {
            setCurrentCardAction(item);

            clearTimeout(timerId.current);

            timerId.current = setTimeout(() => {
                clearCurrentCardAction();
                hideCardAction();
            }, RESPONSE_TIME);
        }

        setTimeout(() => {

            if (currentSelectCard) {
                addHistoryAttempAction([currentSelectCard, item]);
            }

            if (currentSelectCard && currentSelectCard.value === item.value) {
                visibileHiddenCardAction(item);
                clearCurrentCardAction();

                clearTimeout(timerId.current);
            }

            if (currentSelectCard && currentSelectCard.value !== item.value) {
                clearCurrentCardAction();
                hideCardAction();

                clearTimeout(timerId.current);
            }
        
        }, CARD_ROTATE_ANIMATION_TIME * 1000);
    }

    useEffect(() => {
        const isGameOver = playingFields.every((row) => {
            return row.every((item) => item.isHidden);
        });

        if (isGameOver) {
            setGameOver(true);
        }
    }, [playingFields]);

    return (
        <Wrap>
            {isGameRunning && !isGameOver && <Stopwatch onChange={handleChangeGameTime} />}
            <FieldWrap>
                {!isGameRunning && <WelcomeModalView onClick={handlePlayStartClick} />}
                {isGameOver && <GameOver onClick={handleGameOverClick}/>}
                {playingFields.map((row, index) => {
                    return (
                        <Row key={index}>
                            {row.map(({ id, value, isShow, isHidden }, index) => {
                                return (
                                    <Card 
                                        id={id}
                                        key={index} 
                                        value={value} 
                                        onClick={handelClickCard}
                                        isShow={isShow}
                                        isHidden={isHidden}
                                    />
                                );
                            })}
                        </Row>
                    );
                })}
            </FieldWrap>
        </Wrap>
    );
}

const mapStateToProps = state => ({
    playingFields: state.playingFields,
    currentSelectCard: state.currentSelectCard,
    showCards: state.showCards,
});

const actionCreators = {
    showCardAction: actions.showCardAction,
    hideCardAction: actions.hideCardAction,
    setCurrentCardAction: actions.setCurrentCadrAction,
    clearCurrentCardAction: actions.clearCurrentCardAction,
    visibileHiddenCardAction: actions.visibileHiddenCardAction,
    clearStateAction: actions.clearStateAction,
    setGameTimeAction: actions.setGameTimeAction,
    addHistoryAttempAction: actions.addHistoryAttempAction,
};

export const PlayingField = connect(mapStateToProps, actionCreators)(PlayingFieldView);