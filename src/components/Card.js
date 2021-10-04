import React from 'react';
import styled from 'styled-components/macro';

import { CARD_ROTATE_ANIMATION_TIME } from '../constants/appConstants';

const ContentCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    backface-visibility: hidden;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    transition transform ${CARD_ROTATE_ANIMATION_TIME}s ease, box-shadow .3s ease;
    align-items: center;
    border-radius: 10px;
`;

const ContentCardBack = styled(ContentCardFront)`
    background-color: skyblue;
    transform: rotateY(180deg);
    font-size: 30px;
    font-weight: 600;
    color: white;
`;

const CardComponent = styled.button`
    width: 140px;
    height: 140px;
    margin-right: 10px;
    cursor: ${({ isHidden }) => isHidden ? 'default' : 'pointer'};;
    perspective: 1000px;
    opacity: ${({ isHidden }) => isHidden ? '0.3' : '1'};
    border: none;
    padding: 0;
    transion: opacity 1s ease;
    background-color: transparent;

    &:last-child {
        margin: 0;
    }

    &:hover {
        ${ContentCardFront} {
            box-shadow: 4px 4px 28px 11px rgba(34, 60, 80, 0.2);
        }

        ${ContentCardBack} {
            box-shadow: 4px 4px 28px 11px rgba(34, 60, 80, 0.2);
        }
    }

    ${({ isShow }) => {
        return isShow ? `
            ${ContentCardFront} {
                transform: rotateY(180deg);
            }

            ${ContentCardBack} {
                transform: rotateY(360deg);
            }
        ` : ``;
    }}
`;

export const Card = ({ id, value, isHidden, isShow, onClick }) => {
    const handleClick = () => {
        if (isShow) {
            return;
        }

        onClick({
            id,
            value,
            isHidden,
            isShow,
        })
    };

    return (
        <CardComponent 
            isHidden={isHidden} 
            isShow={isShow} 
            onClick={handleClick} 
            disabled={isHidden}
        >
            <ContentCardFront />
            <ContentCardBack>
                {value}
            </ContentCardBack>
        </CardComponent>
    );
}