import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store'
import { Provider } from 'react-redux'
import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
// import Login from './containers/Login';

const store = configStore()

class Boomtown extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Layout>
                        {/* <Login /> */}
                    </Layout>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();

