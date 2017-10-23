import React, { Component } from 'react';
import ItemData from '../ItemData'
// import { connect } from 'react-redux'
// import { getCardItems } from '../../actions'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ItemGrid extends Component {

    render() {
        const styles = {
            width: "100%",
        }

        
        const { items, loading } = this.props.data

        console.log(this.props)
        
        console.log('ItemGrid:', items, loading)
        return (
            <div className="card-item-grid" style={styles}>
                <ItemData cardsData={items} loading={loading}/>
            </div>
        );
    }
}

const fetchCardData = gql`
query {
    items {
      id
      title
      description
      imageurl
      tags
          itemowner {
        id
        fullname
        bio
        email
        owneditems {
          id
          title
          borrower {
            id
            fullname
          }
        }
              borroweditems {
                id
          title
              }
      }
      createdon
      available
      borrower {
        id
        fullname
      }
    }
  }
`;


export default graphql(fetchCardData)(ItemGrid);

/**
 * OLD CODE HERE FOR REFERENCE
 */

// componentDidMount() {

    // this.props.getCardItems()

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
// }

///////////////////////////////////////////////////////////////
//
// const mapStateToProps = (store) => {
//     return {
//         cardsData: store
//     }
// }
//
// const mapDispatchToProps = (dispatch) => { 
//     return { getCardItems() }
// }
//
///////////////////////////////////////////////////////////////

// export default connect(store => store.cardsData, { getCardItems })(ItemData)
// export default connect(mapStateToProps, { getCardItems })(ItemGrid)
