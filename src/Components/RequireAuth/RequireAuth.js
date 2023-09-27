import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../SignIn/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    // if (!user) {
    //     return navigate("/signin");
    // }
    return children;
};

export default RequireAuth;