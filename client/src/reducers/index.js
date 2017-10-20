import { combineReducers } from 'redux';
import client from '../config/apolloClient';
import cardReducer from './cardReducer';

export const rootReducer = combineReducers({
    apollo: client.reducer(),
    user: cardReducer
});