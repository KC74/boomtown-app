import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    marginLeft: '15px',
    marginTop: '15px',
}

class BoomButton extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <RaisedButton 
                    containerElement={'button-container'}
                    style={styles} 
                    label={this.props.label} 
                    backgroundColor={this.props.bgcolor} 
                    primary={this.props.primary}
                    overlayStyle={this.props.overlayStyle}
                    labelColor={'#fff'}
                />
            </div>
        )
    }
}

export default BoomButton;