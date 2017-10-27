import { combineReducers } from 'redux';
import client from '../config/apolloClient';
import cardReducer from './modules/card';

export default combineReducers({
    apollo: client.reducer(),
    cards: cardReducer
});