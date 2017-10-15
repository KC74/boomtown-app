import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import BoomButton from '../../components/Buttons/Buttons'
import Gravatar from 'react-gravatar'
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'

class ItemData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemsData: [],
            usersData: [],
        }
    }


    componentDidMount() {

        this.props.getCardItems()
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
    }

    render() {
        const { items } = this.props
        const { users } = this.props

        return (
            // TODO
            /**
             * Separate UL into another component which then takes a mapped out itemData as props
             */  
            <Masonry className="masonry-component" enableResizableChildren={false} disableImagesLoaded={false} updateOnEachImageLoad={false}> 
                {
                   items.map((item) => {
                        let currentEmail = ''

                        return (
                            <div className="card-wrapper" key={item.id} style={{ width: "33%", padding: "1%", margin: " 0 0.17%" }}>
                                <Card className="card-item">
                                    <CardMedia
                                        overlay={
                                            item.available === false 
                                            ? <CardTitle subtitle="Unavailable" style={{ position: "relative" }} />
                                            : null
                                            }
                                    >
                                        <img src={item.imageUrl} alt="" />
                                    </CardMedia>
                                    <CardHeader  
                                        title={
                                                users.map((user) => {
                                                    if( user.id === item.itemOwner) {
                                                        currentEmail = user.email
                                                        return user.fullName
                                                    }
                                                    return;
                                                })
                                            }
                                        subtitle={new Date(item.createdOn).toUTCString()}
                                        avatar={<Gravatar style={{ borderRadius: "50%"}} email={currentEmail} />}
                                    />
                                    <CardTitle title={item.title} subtitle={ (item.tags).toString().replace(",", ", ") } />
                                    <CardText>
                                        {item.description}
                                    </CardText>
                                    <CardActions>
                                        {
                                            item.available 
                                            ? <BoomButton label="Borrow" bgcolor="rgb(38, 50, 56)" styles={{ marginLeft: "0" }}/>
                                            : null
                                        }
                                    </CardActions>
                                </Card>
                            </div>           
                        )
                    })
                }
            </Masonry>
        )
    }
}

// const mapStateToProps = (store) => {
//     return {
//         users: store.users
//     }
// }

// const mapDispatchToProps = (dispatch) => { 
//     return { getCardItems() }
// }

export default connect(store => store.cardsData, { getCardItems })(ItemData)
