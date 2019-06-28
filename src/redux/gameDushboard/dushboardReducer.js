/* eslint-disable */

import { combineReducers } from 'redux';
import types from './dushboardActionType';


const addDushboardReduser = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD_DUSHBOARD:
            return payload;
        case types.CHANGE_COLOR:
            return state.map(element => {
                if (element.color === 'blue') return {...element, ... { color: 'red', isChange: 0 } };
                if (element.id === payload) return {...element, ... { color: 'blue', isChange: 1 } };
                return element;
            });
        case types.USER_COLOR:
            return state.map(element => {
                if (element.id === payload) return {...element, ... { color: 'green', isChange: 0 } };

                return element;
            });
        case types.CLEAR_RESULT:
            return state.map(el => ({...el, ... { color: 'white', isChange: 0 } }));
        default:
            return state;
    }
};
const gameModeReducer = (state = [], { type, payload }) => {
    switch (type) {
        case types.SUCCESS_GAME_SETTINGS:
            return payload;
        default:
            return state;
    }
};

const userGameModeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.USER_GAME_SETTINGS:
            return payload;
        default:
            return state;
    }
};

const userResultReducer = (state = 0, { type }) => {
    switch (type) {
        case types.USER_INCREMENT:
            return ++state;
        case types.CLEAR_RESULT:
            return 0;
        default:
            return state;
    }
};

const computerResultReduser = (state = 1, { type, payload }) => {
    switch (type) {
        case types.COMPUTER_INCREMENT:
            return payload;
        case types.CLEAR_RESULT:
            return 0;
        default:
            return state;
    }
};

const playerInfoReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.USER_ADD:
            return {...state, ...payload };
        case types.CLEAR_RESULT:
            return {};
        default:
            return state;
    }
};

const winnerReducer = (state = [], { type, payload }) => {
    switch (type) {
        case types.SUCCESS_WINNER_ADD:
            return [...state, payload];
        case types.SUCCESS_ALL_WINNERS:
            return [...state, ...payload];
        default:
            return state;
    }
};

const addMessege = (state = '', { type, payload }) => {
    switch (type) {
        case types.SUCCESS_WINNER_ADD:
            return `${payload.name} WIN !!!`;

        case types.CHANGE_COLOR:
            return '';
        default:
            return state;
    }
};

const error = (state = '', { type, payload }) => {
    switch (type) {
        case types.ERROR:
            return payload;
        default:
            return state;
    }
};

const dushboardReducer = combineReducers({
    userDushboard: addDushboardReduser,
    gameMode: combineReducers({
        gameModeArr: gameModeReducer,
        userGameMode: userGameModeReducer,
    }),
    result: combineReducers({
        user: userResultReducer,
        computer: computerResultReduser,
    }),

    playerInfo: playerInfoReducer,
    winners: winnerReducer,
    messege: addMessege,
    error: error,
});

export default dushboardReducer;