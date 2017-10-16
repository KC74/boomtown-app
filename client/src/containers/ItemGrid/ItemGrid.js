import React, { Component } from 'react';
import ItemData from '../ItemData'
import { connect } from 'react-redux'
import { getCardItems, getUsers } from '../../actions'

class ItemGrid extends Component {

    componentDidMount() {

        this.props.getCardItems()

        /**
         * Old code here for reference
         */
        ///////////////////////////////////////////////////////////////
        //
        // fetch('http://localhost:3001/items')
        // .then( response => {
        //     return response.json()
        // })
        // .then( data => {
        //     this.setState({ itemsData: data})
        // })

        // fetch ('http://localhost:3001/users')
        // .then( response => {
        //     return response.json()
        // })
        // .then( data => {
        //     this.setState({ usersData: data })
        // })
        //
        ///////////////////////////////////////////////////////////////
    }

    render() {
        const styles = {
            width: "100%",
        }

        const { cardsData } = this.props

        return (
            <div className="card-item-grid" style={styles}>
                <ItemData cardsData={cardsData}/>
            </div>
        );
    }
}

/**
 * OLD CODE HERE FOR REFERENCE
 */
///////////////////////////////////////////////////////////////
//
const mapStateToProps = (store) => {
    return {
        cardsData: store
    }
}

// const mapDispatchToProps = (dispatch) => { 
//     return { getCardItems() }
// }
//
///////////////////////////////////////////////////////////////

// export default connect(store => store.cardsData, { getCardItems })(ItemData)
export default connect(mapStateToProps, { getCardItems, getUsers })(ItemGrid)