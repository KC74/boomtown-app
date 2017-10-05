import React from 'react';
import logo from '../../images/boomtown-logo.svg';

const Logo = () => (
    <div className="boomtown-logo" style={{display: 'flex', height: '100%'}}>
        <img src={logo} alt="boomtown logo" 
            style={{
                height: '36px',
                margin: 'auto 0'
            }} />
    </div>
)

export default Logo;