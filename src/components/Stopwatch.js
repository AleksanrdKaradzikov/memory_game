import React from 'react';
import ReactStopwatch from 'react-stopwatch';
import styled from 'styled-components/macro';

const StopwatchComponent = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
`;

const StopwatchValue = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

const StopwatchView = ({ onChange }) => (
    <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        onChange={onChange}
        render={({ formatted }) => {
            return (
                <StopwatchComponent>
                    <StopwatchValue>
                        { formatted }
                    </StopwatchValue>
                </StopwatchComponent>
            );
        }}
    />
);

export const Stopwatch = React.memo(StopwatchView);