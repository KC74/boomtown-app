import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import configStore from './redux/store'
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './config/theme';
import { login, logout } from './redux/modules/firebase'

import Layout from './components/Layout';
import Routes from './routes/'

import './index.css';
import client from './config/apolloClient';

// INITIALIZE STORE
const store = configStore()

//INITIALIZE FIREBASE
var config = {
  apiKey: "AIzaSyDYOAbO_JJ9bY9y2OOOkckrTo8Fm4d2Mbo",
  authDomain: "project-1-4706d.firebaseapp.com",
  databaseURL: "https://project-1-4706d.firebaseio.com",
  projectId: "project-1-4706d",
  storageBucket: "project-1-4706d.appspot.com",
  messagingSenderId: "980953709117"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(login(user));
  } else {
    store.dispatch(logout());
  }
});

class Boomtown extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <ApolloProvider client={client} store={store}>
                    <Router>
                        <Layout>
                            <Routes />
                        </Layout>
                    </Router>
                </ApolloProvider> 
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();

