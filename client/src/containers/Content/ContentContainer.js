import React, { Component } from 'react';

class ContentContainer extends Component {
    render() {
        return (
            <div className="container" style={{ width: "1140px", margin: "0 auto", display: "flex"}}>
                { this.props.children }
            </div>
        );
    }
}

export default ContentContainer;