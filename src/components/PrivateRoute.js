import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location = useLocation();
    const isAuthView = ['/signup', '/login'].includes(location.pathname);
    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            const tokenExpiration = jwtDecode(token).exp;
            const dateNow = new Date();

            if (tokenExpiration < dateNow.getTime() / 1000) {
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [auth]);

    if (isAuthenticated === null) {
        return <></>;
    }
    if (isAuthView && isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated && !isAuthView ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
