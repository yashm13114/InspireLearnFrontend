import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Import Navigate

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if JWT token exists

    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Navigate to="/login" />  // Use Navigate for redirect
                )
            }
        />
    );
};

export default ProtectedRoute;
