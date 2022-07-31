import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['todo']
}

const rootReducer = combineReducers({
    todo: todoReducer
});

export default persistReducer(persistConfig, rootReducer);
