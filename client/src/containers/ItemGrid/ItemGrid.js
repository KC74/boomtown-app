import React, { Component } from 'react';

class ItemGrid extends Component {

    render() {
        const styles = {
            width: "100%",
        }

        return (
            <div className="card-item-grid" style={styles}>
                { this.props.children }
            </div>
        );
    }
}

export default ItemGrid;