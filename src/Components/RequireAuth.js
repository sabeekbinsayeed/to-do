import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
// import auth from '../../../firebase.init';
// import Loading from '../Loading/Loading';
import auth from '../firebase.init';
const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth)
    const location = useLocation()


    if (loading) {
        return <div>loading ....</div>
    }


    // user.providerData[0].providerId === 'password' && 


    //const { user } = useFirebase();

    return children;
};
export default RequireAuth;