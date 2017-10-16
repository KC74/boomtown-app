import React, { Component } from 'react';
import Gravatar from 'react-gravatar'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import BoomButton from '../../components/Buttons/Buttons'
import { Link } from 'react-router-dom'

class CardItem extends Component {
    render() {
        const item = this.props
        let currentEmail = ''
        
        return (
            <div className="card-wrapper" key={item.id} style={{ width: "33%", padding: "1%", margin: " 0 0.17%" }}>
                <Card className="card-item">
                    <CardMedia
                        overlay= {
                            item.availability === false
                                ? <CardTitle subtitle="Unavailable" style={{ position: "relative" }} />
                                : null
                        }
                    >
                        <img src={item.imageUrl} alt="" />
                    </CardMedia>
                    <CardHeader
                        title={
                            item.user.map((user, index) => {
                                if (user.id === item.itemOwner) {
                                    currentEmail = user.email
                                    return <Link key={index} to={`/profile/${user.id}`}>{user.fullName}</Link>
                                }
                                return null;
                            })
                        }
                        subtitle={new Date(item.createdOn).toUTCString()}
                        avatar={<Gravatar style={{ borderRadius: "50%" }} email={currentEmail} />}
                    />
                    <CardTitle title={item.title} subtitle={(item.tags).toString().replace(",", ", ")} />
                    <CardText>
                        {item.description}
                    </CardText>
                    <CardActions>
                        {
                            item.availability
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
