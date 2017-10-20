import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
// import ItemGrid from '../ItemGrid/'
import CardItem from '../../components/ItemCard/CardItem.js'
import CircularProgress from 'material-ui/CircularProgress';

class ItemData extends Component {

    render() {
        const { cardsData, loading } = this.props
        console.log('ItemData:', cardsData, loading)
        return (
            loading
                ? <div className="loadingIcon" style={{ position: "absolute", top: "50%", left: "50%" }}><CircularProgress size={80} thickness={5} /></div>
                : <Masonry className="masonry-component" enableResizableChildren={false} disableImagesLoaded={false} updateOnEachImageLoad={false}>
                    {
                        cardsData.map((item) =>
                            <CardItem
                                key={(Math.random() * 1000).toFixed(2)}
                                {...item}
                            />
                        )
                    }
                </Masonry>
        )
    }
}

export default ItemData