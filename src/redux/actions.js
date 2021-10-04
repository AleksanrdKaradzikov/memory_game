export const SHOW_CARD_ACTION_TYPE = 'SHOW_CARD_ACTION_TYPE';
export const SET_CURRENT_CARD_ACTION_TYPE = 'SET_CURRENT_CARD_ACTION_TYPE';
export const CLEAR_CURRENT_CARD_ACTION_TYPE = 'CLEAR_CURRENT_CARD_ACTION_TYPE';
export const HIDE_CARD_ACTION_TYPE = 'HIDE_CARD_ACTION_TYPE';
export const VISIBLE_HIDDENN_CARD_ACTION_TYPE = 'VISIBLE_HIDDENN_CARD_ACTION_TYPE';
export const CLEAR_STATE_ACTION_TYPE = 'CLEAR_STATE_ACTION_TYPE';
export const SET_GAME_TIME_ACTION_TYPE = 'SET_GAME_TIME_ACTION_TYPE';
export const ADD_ATTEMP_ACTION_TYPE = 'ADD_ATTEMP_ACTION_TYPE';

export const showCardAction = (payload) => ({
    type: SHOW_CARD_ACTION_TYPE,
    payload,
});

export const setCurrentCadrAction = (payload) => ({
    type: SET_CURRENT_CARD_ACTION_TYPE,
    payload,
});

export const clearCurrentCardAction = () => ({
    type: CLEAR_CURRENT_CARD_ACTION_TYPE,
});

export const hideCardAction = () => ({
    type: HIDE_CARD_ACTION_TYPE,
});

export const visibileHiddenCardAction = (payload) => ({
    type: VISIBLE_HIDDENN_CARD_ACTION_TYPE,
    payload,
});

export const clearStateAction = () => ({
    type: CLEAR_STATE_ACTION_TYPE,
});

export const setGameTimeAction = (payload) => ({
    type: SET_GAME_TIME_ACTION_TYPE,
    payload,
});

export const addHistoryAttempAction = (payload) => ({
    type: ADD_ATTEMP_ACTION_TYPE,
    payload,
});
