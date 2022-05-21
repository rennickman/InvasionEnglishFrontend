import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


function PrivateRoute({ children } : any) {

    // Check for access token
    const accessToken = false;

    // Boolean representing loading status
    const loading = false;


    // Setting up re-routing to login page is Access Token not found
    const location = useLocation();
    const fromLocation = (location.state as any)?.from;
    const previousLocation = location.state ? fromLocation : { pathname: '/login' };




    if (accessToken) {
        // Render Children if access Token is present
        return children;

    } else if (loading) {
        // Render Loading message if application loading state is true
        return <p>Loading...</p>;

    } else if (!accessToken && !loading) {
        // Reroute User to Login Page if access token not present and application loading state is false
        return <Navigate to={previousLocation} state={{from: location}} replace />;

    } else {
        // Render Error Message if access token not present but application is in loading state for some reason
        return <p>Something went wrong</p>;
    }
}


export default PrivateRoute;