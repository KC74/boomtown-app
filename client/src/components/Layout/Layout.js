import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header/';

import './styles.css';

// ---------------------------------------

// const Layout = ({ children }) => (
//     <div className="appContentWrapper">
//         <div className="appHeader">
//             {/* Might want to put your header bar here... */}
//         </div>
//         <div className="appContent">
//             {children}
//         </div>
//         {/* And a footer here, but not on the login route... */}
//     </div>
// );

// Layout.defaultProps = {
//     children: null
// };

// Layout.propTypes = {
//     children: PropTypes.node
// };

// export default Layout;

// ---------------------------------------
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
// import FlatButton from 'material-ui/FlatButton';
import { ContentContainer }  from '../../containers/Content/';
import { ItemGrid } from '../../containers/ItemGrid/'
import ItemData from '../../containers/ItemData/'

class Layout extends Component {
    render() {

        Layout.propTypes = {
            children: PropTypes.node
        };

        return (
            <div className="appContentWrapper">
                <div className="appHeader">
                    {/* Might want to put your header bar here... */}
                    <Header />
                </div>
                <div className="appContent">
                    <ContentContainer>
                        <ItemGrid>
                            <ItemData/>
                        </ItemGrid>
                    </ContentContainer>
                </div>

                {/* And a footer here, but not on the login route... */}
            </div>
        );

    }
}

export default Layout;