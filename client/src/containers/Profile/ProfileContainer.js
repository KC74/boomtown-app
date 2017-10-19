import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCardItems, getUsers } from '../../actions'
import { CardItem } from '../../components/ItemCard/'
import Masonry from 'react-masonry-component';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import Gravatar from 'react-gravatar'

import './styles.css'

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getCardItems()
    }

    render() {
        const paperStyle = {
            width: '100%',
            margin: '1.5rem auto 1rem',
            display: 'inline-block',
        };

        const { match } = this.props
        const { cardsData } = this.props.cardsData
        const filteredItems = cardsData.items.filter(item => item.itemowner === match.params.id)

        let userData = {}

        cardsData.users.find((user) => {
            if (user.id === match.params.id) {
                return userData = {
                    ...user,
                    itemsShared: user.items.length,
                    itemsBorrowed: 0
                }
            }
            return false
        })

        return (
            cardsData.isLoading
                ? <div className="loadingIcon" style={{ position: "absolute", top: "50%", left: "50%" }}><CircularProgress size={80} thickness={5} /></div>
                :
                <div className="card-item-grid" style={{ width: '100%' }}>
                    <div className="paper-wrapper" style={{ width: '75%', margin: '0 auto' }}>
                        <Paper style={paperStyle} zDepth={1}>
                            <div className="paper-container">
                                <div className="paper-left-container">
                                    <h1>{userData.fullName}</h1>
                                    <p>{userData.bio}</p>
                                </div>
                                <div className="paper-right-container">
                                    <div className="item-sharing-wrapper">
                                        <span className="items-shared-counter">
                                            {userData.itemsShared}
                                        </span>
                                        <span className="items-shared">Items shared</span>
                                        <span className="items-borrowed-counter">
                                            {userData.itemsBorrowed}
                                        </span>
                                        <span className="items-borrowed">Items borrowed</span>
                                    </div>
                                    <div className="profile-gravatar">
                                        <Gravatar style={{borderRadius: '50%'}} size={180} email={userData.email}/>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                    <Masonry className="masonry-component" enableResizableChildren={false} disableImagesLoaded={false} updateOnEachImageLoad={false}>
                        {
                            filteredItems.map(item => {
                                return <CardItem
                                    key={item.id}
                                    {...item}
                                />
                            })

                        }
                    </Masonry>
                </div>

        );
    }
}

const mapStateToProps = (store) => {
    return {
        cardsData: store
    }
}

export default connect(mapStateToProps, { getCardItems, getUsers })(ProfileContainer)