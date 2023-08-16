import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const LoginAndSingupRoute = ({ children }) => {
    const userLoggedIn = useAuth();
    const location = useLocation()
    if (!userLoggedIn) {
        return children
    }
    if (userLoggedIn) {
        return <Navigate to="/" state={{ from: location }} replace />
    }
};

export default LoginAndSingupRoute;