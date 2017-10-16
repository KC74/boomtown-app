import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCardItems, getUsers } from '../../actions'
import { CardItem } from '../../components/ItemCard/'
import Masonry from 'react-masonry-component';
import CircularProgress from 'material-ui/CircularProgress';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getCardItems()
    }

    render() {

        const { match } = this.props
        const { cardsData } = this.props.cardsData
        const filterdItems = cardsData.items.filter(item => item.itemOwner === match.params.id)

        return (
            cardsData.isLoading
                ? <div className="loadingIcon" style={{ position: "absolute", top: "50%", left: "50%" }}><CircularProgress size={80} thickness={5} /></div>
                :
                <div className="card-item-grid" style={{ width: '100%' }}>
                    <Masonry className="masonry-component" enableResizableChildren={false} disableImagesLoaded={false} updateOnEachImageLoad={false}>
                        {
                            filterdItems.map(item => {
                                return <CardItem
                                    key={item.id}
                                    id={item.id}
                                    availability={item.available}
                                    borrower={item.borrower}
                                    createdOn={item.createdOn}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                    itemOwner={item.itemOwner}
                                    tags={item.tags}
                                    title={item.title}
                                    user={item.user}
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