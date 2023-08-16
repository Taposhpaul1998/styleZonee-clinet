import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({ children }) => {
    const userLoggedIn = useAuth();
    const location = useLocation();
    if (!userLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (userLoggedIn) {
        return children
    }
};

export default PrivetRoute;