import React, { Component } from 'react';
import Logo from '../../components/Logo/';
import BoomSelectField from '../../components/SelectField/SelectField'
import BoomButton from '../../components/Buttons/Buttons'
import AppBar from 'material-ui/AppBar'
import './styles.css';


const appbarStyles = {
    width: '100vw',
    backgroundColor: '#fff',
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '65px',
    justifyContent: 'space-between',
    padding: '0',
}

class Header extends Component {

    state = {
        labels: [
            'Electronics',
            'Household Items',
            'Musical Instruments',
            'Physical Media',
            'Recreational Equipment',
            'Sporting Goods',
        ],
        values: []
    }

    handleChange = (event, index, values) => this.setState({ values });

    render() {
        return (
            <div className="header-container">
                <AppBar
                    style={appbarStyles}
                    titleStyle={{ display: 'none' }}
                    showMenuIconButton={false}
                >
                    <div className="left-container">
                        <div className="logo-container"><Logo /></div>
                        <div className="selectField-container">
                            <BoomSelectField 
                                values={this.state.values}
                                handleChange={this.handleChange}
                                labels={this.state.labels} 
                            />
                         </div>
                    </div>
                    <div className="right-container">
                        <BoomButton label="My Profile" primary={true} styles={{ margin: "15px 0 15px 15px" }} />
                        <BoomButton label="Logout" bgcolor="rgb(38, 50, 56)" styles={{ margin: "15px 0 15px 15px" }} />
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default Header;
