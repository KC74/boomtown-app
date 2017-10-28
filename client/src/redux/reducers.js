import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import client from '../config/apolloClient';
import cardReducer from './modules/card';
import firebaseAuth from './modules/firebase'

export default combineReducers({
    apollo: client.reducer(),
    cards: cardReducer,
    auth: firebaseAuth,
    form: formReducer
});