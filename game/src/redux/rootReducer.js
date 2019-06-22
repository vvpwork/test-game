import {combineReducers} from 'redux'

import dushboardReduser from './gameDushboard/dushboardReducer'



const rootReduser = combineReducers({
    root: dushboardReduser
})

export default rootReduser;




