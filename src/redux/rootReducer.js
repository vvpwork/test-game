import { combineReducers } from 'redux';

import dushboardReduser from './gameDushboard/dushboardReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistOptions = {
    key: 'winners',
    storage,
    whitelist: ['winners']
};


const rootReduser = combineReducers({
    root: persistReducer(persistOptions, dushboardReduser)
});

export default rootReduser;