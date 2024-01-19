import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isLogin = localStorage.getItem('loginData') ? true : false;

    let auth = {'token': isLogin}
  return (
    auth.token ? <Outlet/> : <Navigate to="/signin" />
  );
};

export default PrivateRoute;
