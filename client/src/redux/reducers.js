import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import client from "../config/apolloClient";
import cardReducer from "./modules/card";
import firebaseAuth from "./modules/firebase";
import tagsReducer from "./modules/tags";

export default combineReducers({
  apollo: client.reducer(),
  auth: firebaseAuth,
  form: formReducer,
  cards: cardReducer,
  tags: tagsReducer
});
