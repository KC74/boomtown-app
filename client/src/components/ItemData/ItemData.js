import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import BoomButton from '../../components/Buttons/Buttons'
import Gravatar from 'react-gravatar'
import Masonry from 'react-masonry-component';

class ItemData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemsData: [],
            usersData: [],
        }
    }


    componentDidMount() {
        fetch('http://localhost:3001/items')
        .then( response => {
            return response.json()
        })
        .then( data => {
            this.setState({ itemsData: data})
        })

        fetch ('http://localhost:3001/users')
        .then( response => {
            return response.json()
        })
        .then( data => {
            this.setState({ usersData: data })
        })
    }

    render() {
        const { itemsData } = this.state
        const { usersData } = this.state

        return (
            // TODO
            /**
             * Separate UL into another component which then takes a mapped out itemData as props
             */  
            <Masonry className="masonry-component" enableResizableChildren={false} disableImagesLoaded={false} updateOnEachImageLoad={false}> 
                {
                    itemsData.map((item) => {
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
                                                usersData.map((user) => {
                                                    if( user.id === item.itemOwner) {
                                                        currentEmail = user.email
                                                        return user.fullName
                                                    }
                                                    return null
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

export default ItemData;