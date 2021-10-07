
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const accessToken = sessionStorage.getItem('accessToken')
  return (
    <Route {...rest} render={props => (
      accessToken && restricted ?
        <Redirect to="/" />
        : <Component {...props} />
    )} />
  );
};
export default PublicRoute;
