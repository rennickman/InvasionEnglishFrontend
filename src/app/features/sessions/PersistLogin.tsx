import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


function PersistLogin() {

    // Check for access token
    const accessToken = false;

    // Boolean representing loading status
    const loading = false;

    // Check for refresh token
    const refreshToken = null;



    useEffect(() => {
        // Method to verify a Refresh Token
        function verifyRefreshToken() {
            try {
                // dispatch(refreshAccessToken(refreshToken));
                console.log("Refreshing Access Token");
            } catch (error) {
                console.log("Error refreshing Access Token");
            }
        }

        // Call the Refresh Access Token method if no Access Token found
        if (!accessToken) {
            verifyRefreshToken();
        }
    }, [accessToken, refreshToken]);



    // Render Loading message or Outlet
    return (
        <>
            {loading ? <p>Loading...</p> : <Outlet />}
        </>
    )
    
}


export default PersistLogin;