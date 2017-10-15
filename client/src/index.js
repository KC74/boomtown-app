import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import configStore from './store'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes/'

import './index.css';

const store = configStore()

class Boomtown extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Router>
                        <Layout>
                            <Routes />
                        </Layout>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();

