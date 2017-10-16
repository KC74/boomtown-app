import React, { Component } from 'react';
import notfound from '../../images/404.png'

import './styles.css'

class NotFound extends Component {
    render() {
        return (
            <div className="notfound-container">
                <img className="notfound-image" src={notfound} alt="not found"/>
                <h1>404 Not Found</h1>
                <p>Oops! Well this is awkward ...</p>
            </div>
        );
    }
}

export default NotFound;