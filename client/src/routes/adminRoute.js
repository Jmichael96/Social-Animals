// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // const AdminRoute = ({ isAuthenticated, component: Component, ...rest }) => (
// //     <Route
// //         {...rest}
// //         render={props =>
// //             isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
// //     />
// // );
// const fakeAuthCentralState = {
//     isAuthenticated: false,
//     authenticate(callback) {
//        this.isAuthenticated = true;
//        setTimeout(callback, 300);
//     },
//     signout(callback) {
//        this.isAuthenticated = false;
//        setTimeout(callback, 300); 
//     }
//  };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       fakeAuth.isAuthenticated === true
//         ? <Component {...props} />
//         : <Redirect to='/login' />
//     )} />
//   )

// export default AdminRoute;