import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import CircularProgress from "material-ui/CircularProgress";
import * as firebase from "firebase";

// class PrivateRoute extends Component {
//   render() {
//     const { component: Component, ...rest } = this.props;
//     console.log(this.props);
//     const user = firebase.auth().currentUser;

//     if (user === null) {
//       // user not initialized yet
//       return (
//         <div
//           className="loadingIcon"
//           style={{ position: "absolute", top: "50%", left: "50%" }}
//         >
//           <CircularProgress size={80} thickness={5} />
//         </div>
//       );
//     } else if (user) {
//       // user signed in
//       return <Route {...rest} render={props => <Component {...props} />} />;
//     } else {
//       // No user is signed in.
//       return (
//         <Route
//           {...rest}
//           render={props => (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           )}
//         />
//       );
//     }
//   }
// }

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = firebase.auth().currentUser;

  if (user === null) {
    // user not initialized yet
    return (
      <div
        className="loadingIcon"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
        <CircularProgress size={80} thickness={5} />
      </div>
    );
  } else if (user) {
    // user signed in
    return (
      <Route
        {...rest}
        location={rest.location}
        render={props => <Component {...props} />}
      />
    );
  } else {
    // No user is signed in.
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
      />
    );
  }
};

export default PrivateRoute;
