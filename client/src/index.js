import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import configStore from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes/'

import './index.css';
import client from './config/apolloClient';

const store = configStore()

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

