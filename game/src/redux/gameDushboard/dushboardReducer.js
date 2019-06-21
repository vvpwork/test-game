import {combineReducers} from 'redux'
import types from './dushboardActionType'


const addDushboardReduser =  (state = [], {type, payload})=>{
    switch(type){
        case types.ADD_DUSHBOARD: return payload;
        case types.ERROR: return payload
        default: return state
    }
}
const gameModeReducer = (state=[], {type, payload})=>{
    switch(type){
        case types.SUCCESS_GAME_SETTINGS: return payload;
        case types.ERROR: return payload;
        default: return state
    }
}

const dushboardReducer = combineReducers({
    userDushboard: addDushboardReduser,
    gameModeArr: gameModeReducer
})


export default dushboardReducer;