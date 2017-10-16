import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
// import ItemGrid from '../ItemGrid/'
import CardItem from '../../components/ItemCard/CardItem.js'
import CircularProgress from 'material-ui/CircularProgress';

class ItemData extends Component {

    render() {

        const { cardsData } = this.props.cardsData
        return (
            // TODO
            /**
             * Separate UL into another component which then takes a mapped out itemData as props
             */

            cardsData.isLoading
                ? <div className="loadingIcon" style={{ position: "absolute", top: "50%", left: "50%" }}><CircularProgress size={80} thickness={5} /></div>
                : <Masonry className="masonry-component" enableResizableChildren={false} disableImagesLoaded={false} updateOnEachImageLoad={false}>
                    {
                        cardsData.items.map((item) =>
                            <CardItem
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
                        )
                    }
                </Masonry>
        )
    }
}

export default ItemData