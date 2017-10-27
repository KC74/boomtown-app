import React, { Component } from 'react';
import Gravatar from 'react-gravatar'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import BoomButton from '../../components/Buttons/Buttons'
import { Link } from 'react-router-dom'

class CardItem extends Component {
    render() {

        const { id, title, description, createdon, imageurl, itemowner, tags, borrower } = this.props

        return (
            <div className="card-wrapper" key={id} style={{ width: "33%", padding: "1%", margin: " 0 0.17%" }}>
                <Card className="card-item">
                    <CardMedia
                        overlay={
                            borrower !== null
                                ? <CardTitle subtitle="Unavailable" style={{ position: "relative" }} />
                                : null
                        }
                    >
                        <img src={imageurl} alt="" />
                    </CardMedia>
                    <CardHeader
                        title={<Link key={itemowner.id} to={`/profile/${itemowner.id}`}>{itemowner.fullname}</Link>}
                        subtitle={new Date(createdon).toUTCString()}
                        avatar={<Gravatar style={{ borderRadius: "50%" }} email={itemowner.email} />}
                    />
                    <CardTitle title={title} 
                    /* subtitle={(tags).toString().replace(",", ", ")} */
                     />
                    <CardText>
                        {description}
                    </CardText>
                    <CardActions>
                        {
                            !borrower
                                ? <BoomButton label="Borrow" bgcolor="rgb(38, 50, 56)" styles={{ marginLeft: "0" }} />
                                : null
                        }
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CardItem;
