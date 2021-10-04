import { combineReducers } from 'redux';

import { dataFormatToPlayingFields } from '../helpers/dataFormatHelpers';
import { PLAYING_FIELD_DATA } from '../constants/dataConstants';
import { 
    SHOW_CARD_ACTION_TYPE,
    SET_CURRENT_CARD_ACTION_TYPE,
    CLEAR_CURRENT_CARD_ACTION_TYPE,
    HIDE_CARD_ACTION_TYPE,
    VISIBLE_HIDDENN_CARD_ACTION_TYPE,
    CLEAR_STATE_ACTION_TYPE,
    SET_GAME_TIME_ACTION_TYPE,
    ADD_ATTEMP_ACTION_TYPE,
} from './actions';

const initialPlayingFieldsState = dataFormatToPlayingFields(PLAYING_FIELD_DATA);
const initiaGameTimeState = { hours: 0, minutes: 0, seconds: 0 };

const playingFieldsReducer = (state = initialPlayingFieldsState, action) => {
    switch(action.type) {
        case SHOW_CARD_ACTION_TYPE: {
            const { payload } = action;

            return state.map((row) => {
                return row.map((item) => {
                    if (item.id === payload.id && !item.isShow) {
                        return {
                            ...item,
                            isShow: true,
                        }
                    }
                    return item;
                });
            });
        }

        case HIDE_CARD_ACTION_TYPE: {
            return state.map((row) => {
                return row.map((item) => {
                    if (item.isHidden) {
                        return item;
                    }

                    return {
                        ...item,
                        isShow: false,
                    }
                })
            })
        }

        case VISIBLE_HIDDENN_CARD_ACTION_TYPE: {
            const { payload } = action;

            return state.map((row) => {
                return row.map((item) => {
                    if (item.value === payload.value) {
                        return {
                            ...item,
                            isHidden: true,
                        }
                    }
                    return item;
                })
            });
        }

        case CLEAR_STATE_ACTION_TYPE: {
            return dataFormatToPlayingFields(PLAYING_FIELD_DATA);
        }

        default: 
            return state;
    }
};

const currentSelectCardReduser = (state = null, action) => {
    switch(action.type) {
        case SET_CURRENT_CARD_ACTION_TYPE: {
            return action.payload;
        }
        case CLEAR_CURRENT_CARD_ACTION_TYPE: {
            return null;
        }

        case CLEAR_STATE_ACTION_TYPE: {
            return null;
        }

        default:
            return state;
    }
}

const showCardsReduser = (state = [], action) => {
    switch(action.type) {
        case SHOW_CARD_ACTION_TYPE: {
            return [
                ...state,
                action.payload,
            ]
        }

        case HIDE_CARD_ACTION_TYPE: {
            return [];
        }

        case VISIBLE_HIDDENN_CARD_ACTION_TYPE: {
            return [];
        }

        case CLEAR_STATE_ACTION_TYPE: {
            return [];
        }

        default:
            return state;
    }
}

const gameTimeReduser = (state = initiaGameTimeState, action) => {
    switch(action.type) {
        case CLEAR_STATE_ACTION_TYPE: {
            return initiaGameTimeState;
        }

        case SET_GAME_TIME_ACTION_TYPE: {
            const { payload } = action;
            return payload;
        };

        default: 
            return state;
    }
}

const attemptsHistoryReduser = (state = [], action) => {
    switch(action.type) {
        case ADD_ATTEMP_ACTION_TYPE: {
            const { payload } = action;

            return [
                ...state,
                payload,
            ];
        }

        case CLEAR_STATE_ACTION_TYPE: {
            return [];
        }

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    playingFields: playingFieldsReducer,
    currentSelectCard: currentSelectCardReduser,
    showCards: showCardsReduser,
    gameTime: gameTimeReduser,
    attemptsHistory: attemptsHistoryReduser,
});