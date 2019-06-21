import {combineReducers} from 'redux'

import dushboardReduser from './gameDushboard/dushboardReducer'



const rootReduser = combineReducers({
    dushboard: dushboardReduser
})

export default rootReduser;




