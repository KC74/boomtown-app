import React, { Component } from 'react';
import ItemData from '../ItemData'

class ItemGrid extends Component {


    render() {
        const styles = {
            width: "100%",
        }

        return (
            <div className="card-item-grid" style={styles}>
                <ItemData/>
            </div>
        );
    }
}

export default ItemGrid;