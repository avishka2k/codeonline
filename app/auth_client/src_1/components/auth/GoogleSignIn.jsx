import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleSignIn = ({ onSuccess, onFailure }) => {

  return (
    <GoogleLogin
    onSuccess={onSuccess}
    onError={onFailure}
    />
  );
};

export default GoogleSignIn;
